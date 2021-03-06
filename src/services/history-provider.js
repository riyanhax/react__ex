export class HistoryProvider {
	_pair;
	_datafeedUrl;
	_requester;

	constructor(datafeedUrl, requester, pair) {
		this._pair =pair;
		this._datafeedUrl = datafeedUrl;
		this._requester = requester;
	}

	getBars(symbolInfo, resolution, rangeStartDate, rangeEndDate) {
		const requestParams = {
			time_from: rangeStartDate,
			time_to: rangeEndDate,
			period: this.getPeriod(resolution),
		};

		return new Promise((resolve, reject) => {
			this._requester.sendRequest(this._datafeedUrl, `api/v2/peatio/public/markets/${this._pair}/k-line`, requestParams)
				// this._requester.sendRequest(this._datafeedUrl, 'history', requestParams)
				.then((response) => {
					// if (response.s !== 'ok' && response.s !== 'no_data') {
					// 	reject(response.errmsg);
					// 	return;
					// }

					let bars = [];
					const meta = {
						noData: false,
					};

					// if (response.s === 'no_data') {
					// 	meta.noData = true;
					// 	meta.nextTime = response.nextTime;
					// } else {
					if (!response.length) {
						meta.noData = true;
						// meta.nextTime = 1566226690;
					} else {
						const volumePresent = response.v !== undefined;
						const ohlPresent = response.o !== undefined;

						// for (let i = 0; i < response.t.length; ++i) {
						// 	const barValue = {
						// 		time: response.t[i] * 1000,
						// 		close: Number(response.c[i]),
						// 		open: Number(response.c[i]),
						// 		high: Number(response.c[i]),
						// 		low: Number(response.c[i]),
						// 	};
						//
						// 	if (ohlPresent) {
						// 		barValue.open = Number((response).o[i]);
						// 		barValue.high = Number((response).h[i]);
						// 		barValue.low = Number((response).l[i]);
						// 	}
						//
						// 	if (volumePresent) {
						// 		barValue.volume = Number((response).v[i]);
						// 	}
						//
						// 	bars.push(barValue);
						// }

						const data = response.map((item => {
							return {
								time: item[0] * 1000,
								open: Number(item[1]),
								high: Number(item[2]),
								low: Number(item[3]),
								close: Number(item[4]),
								volume: Number(item[5]),
							};
						}));

						bars = data;
					}

					resolve({
						bars: bars,
						meta: meta,
					});
				})
				.catch((reason) => {
					const reasonString = 'HistoryProvider - ERROR';
					console.warn(`HistoryProvider: getBars() failed, error=${reasonString}`);
					reject(reasonString);
				});
		});
	}

	getPeriod(resolution) {
		let min = 1;

		if (resolution === 'D' || resolution === '1D') {
			min = 1440;
		} else if (resolution === 'W' || resolution === '1W') {
			min = 10080;
		} else if (resolution === '5') {
			min = 5;
		} else if (resolution === '15') {
			min = 15;
		} else if (resolution === '30') {
			min = 30;
		} else if (resolution === '60') {
			min = 60;
		}

		return min;
	}
}
