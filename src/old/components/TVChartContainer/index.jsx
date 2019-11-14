import * as React from 'react';
import './index.css';
import { widget } from '../../charting_library/charting_library.min';
import { CompatibleDatafeed } from '../../services/trading.service';
function getLanguageFromURL() {
	const regex = new RegExp('[\\?&]lang=([^&#]*)');
	const results = regex.exec(window.location.search);
	return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export class TVChartContainer extends React.PureComponent {
	static defaultProps = {
		symbol: 'ETH_USD',
		interval: 'D',
		containerId: 'tv_chart_container',
		//datafeedUrl: 'api/v2/peatio/public/markets/ethusd/k-line',
		libraryPath: '/assets/charting_library/',
		chartsStorageUrl: 'https://saveload.tradingview.com',
		chartsStorageApiVersion: '1.1',
		clientId: 'tradingview.com',
		userId: 'public_user_id',
		fullscreen: false,
		autosize: true,
		studies_overrides: {
			
		}
	};

	tvWidget = null;

	componentDidMount() {
		
		const widgetOptions = {
			symbol: this.props.pair,
			// BEWARE: no trailing slash is expected in feed URL
		//	datafeed: new window.Datafeeds.UDFCompatibleDatafeed(this.props.datafeedUrl),

			datafeed: new CompatibleDatafeed("http://localhost:3000",this.props.pair),
			interval: this.props.interval,
			container_id: this.props.containerId,
			library_path: this.props.libraryPath,
		
			locale: getLanguageFromURL() || 'en',
		
			enabled_features: ['study_templates'],
			charts_storage_url: this.props.chartsStorageUrl,
			charts_storage_api_version: this.props.chartsStorageApiVersion,
			client_id: this.props.clientId,
			user_id: this.props.userId,
			toolbar_bg: '#111622',
			// /overrides."painProperties.background": "#131722",
			enabled_features: ["move_logo_to_main_pane"],
			loading_screen: { backgroundColor: "#111622" },
			fullscreen: this.props.fullscreen,
			autosize: this.props.autosize,
		
			studies_overrides: this.props.studies_overrides,
		};

		const tvWidget = new widget(widgetOptions);
		this.tvWidget = tvWidget;

		tvWidget.onChartReady(() => {
	
			tvWidget.headerReady().then(() => {
				const button = tvWidget.createButton();
				button.setAttribute('title', 'Click to show a notification popup');
				button.classList.add('apply-common-tooltip');
				
				button.addEventListener('click', () => tvWidget.showNoticeDialog({
					title: 'Notification',
					body: 'TradingView Charting Library API works correctly',
					callback: () => {
						console.log('Noticed!');
					},
				}));

				button.innerHTML = 'Check API';
			});
		});
	}

	componentWillUnmount() {
		if (this.tvWidget !== null) {
			this.tvWidget.remove();
			this.tvWidget = null;
		}
	}

	render() {
		return (
			<div
				id={ this.props.containerId }
				className={ 'TVChartContainer' }
			/>
		);
	}
}
