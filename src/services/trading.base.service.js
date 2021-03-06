import {
  HistoryProvider,
} from './history-provider';

import { DataPulseProvider } from './data-pulse-provider';
// import { Requester } from './requester';

export const Constants = {
  SearchItemsLimit: 30,
};

export class CompatibleDatafeedBase {
  _configuration = defaultConfiguration();
  _datafeedURL;
  _pair;
  // _symbolsStorage = null;

  _historyProvider;
  _dataPulseProvider;

  _requester;


  constructor(datafeedURL, requester, pair, updateFrequency = 10 * 1000) {
 
    this._datafeedURL = datafeedURL;
    this._pair =pair;
    this._requester = requester;
    this._historyProvider = new HistoryProvider(datafeedURL, this._requester, pair);

    this._dataPulseProvider = new DataPulseProvider(this._historyProvider, updateFrequency);
  }

  onReady(callback) {
    callback(this._configuration);
  }

  calculateHistoryDepth(resolution, resolutionBack, intervalBack) {
    return undefined;
  }

  resolveSymbol(symbolName, onResolve, onError) {
    const info = {
      description: "FTH/USD",
      'exchange-listed': "Azbit",
      'exchange-traded': "Azbit",
      has_intraday: true,
      minmov: 1,
      name: "FTH_USD",
      pointvalue: 1,
      pricescale: 100000000,
      ticker: "FTH_USD",
      timezone: "Europe/Tallinn",
      supported_resolutions:  ["1", "15", "60", "1D", '1W'],
      session: '24x7',
      volume_precision: 8,
      type: 'crypto',
    };

    setTimeout(() => onResolve(info), 0);

    // onResolve(info);
  }

  // TODO: uncomment me to get info about
  // resolveSymbol(symbolName, onResolve, onError) {
  //   // logMessage('Resolve requested');
  //
  //   const resolveRequestStartTime = Date.now();
  //   function onResultReady(symbolInfo) {
  //     // logMessage(`Symbol resolved: ${Date.now() - resolveRequestStartTime}ms`);
  //     onResolve(symbolInfo);
  //   }
  //
  //   if (!this._configuration.supports_group_request) {
  //     const params = {
  //       symbol: symbolName,
  //     };
  //
  //     this._send('symbols', params)
  //       .then((response) => {
  //         if (response.s !== undefined) {
  //           onError('unknown_symbol');
  //         } else {
  //           onResultReady(response);
  //         }
  //       })
  //       .catch((reason) => {
  //       // logMessage(`UdfCompatibleDatafeed: Error resolving symbol: ${getErrorMessage(reason)}`);
  //       onError('unknown_symbol');
  //     });
  //   } else {
  //     if (this._symbolsStorage === null) {
  //       throw new Error('UdfCompatibleDatafeed: inconsistent configuration (symbols storage)');
  //     }
  //
  //     // this._symbolsStorage.resolveSymbol(symbolName).then(onResultReady).catch(onError);
  //   }
  // }

  // public getMarks(symbolInfo: LibrarySymbolInfo, from: number, to: number, onDataCallback: GetMarksCallback<Mark>, resolution: ResolutionString): void {
  //   if (!this._configuration.supports_marks) {
  //     return;
  //   }
  //
  //   const requestParams: RequestParams = {
  //     symbol: symbolInfo.ticker || '',
  //     from: from,
  //     to: to,
  //     resolution: resolution,
  //   };
  //
  //   this._send<Mark[] | UdfDatafeedMark>('marks', requestParams)
  //     .then((response: Mark[] | UdfDatafeedMark) => {
  //       if (!Array.isArray(response)) {
  //         const result: Mark[] = [];
  //         for (let i = 0; i < response.id.length; ++i) {
  //           result.push({
  //             id: extractField(response, 'id', i),
  //             time: extractField(response, 'time', i),
  //             color: extractField(response, 'color', i),
  //             text: extractField(response, 'text', i),
  //             label: extractField(response, 'label', i),
  //             labelFontColor: extractField(response, 'labelFontColor', i),
  //             minSize: extractField(response, 'minSize', i),
  //           });
  //         }
  //
  //         response = result;
  //       }
  //
  //       onDataCallback(response);
  //     })
  //     .catch((error?: string | Error) => {
  //     logMessage(`UdfCompatibleDatafeed: Request marks failed: ${getErrorMessage(error)}`);
  //     onDataCallback([]);
  //   });
  // }

  getServerTime(callback) {
    if (!this._configuration.supports_time) {
      return;
    }

    this._send('api/v2/peatio/public/timestamp')
      .then((response) => {
        const time = parseInt(response);
        if (!isNaN(time)) {
          callback(time);
        }
      })
      .catch((error) => {});
  }


  getBars(symbolInfo, resolution, rangeStartDate, rangeEndDate, onResult, onError) {
    this._historyProvider.getBars(symbolInfo, resolution, rangeStartDate, rangeEndDate)
      .then((result) => {
        onResult(result.bars, result.meta);
      })
      .catch(onError);
  }

  subscribeBars(symbolInfo, resolution, onTick, listenerGuid, onResetCacheNeededCallback) {
    this._dataPulseProvider.subscribeBars(symbolInfo, resolution, onTick, listenerGuid);
  }

  unsubscribeBars(listenerGuid) {
    this._dataPulseProvider.unsubscribeBars(listenerGuid);
  }

  _send(urlPath, params) {
    return this._requester.sendRequest(this._datafeedURL, urlPath, params);
  }
}

function defaultConfiguration() {
  return {
    supports_search: false,
    supports_group_request: false,
    supported_resolutions:  ['1', '15', '60', '1D', '1W'],
    supports_marks: false,
    supports_time: true,
    supports_timescale_marks: true,
  };
}
