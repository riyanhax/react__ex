import React, { useEffect } from 'react';
import './index.css';
import Slider from 'cmp/Homepage/slider/slider';
import TradersAffilatesTab from 'cmp/Homepage/tradersAffilatesTab/tradersAffilatesTab';
import CrypCurrConTable from 'cmp/Homepage/cryptoCurrencyContestTable/cryptoCurrencyContestsTable';
import DemoTradConTable from 'cmp/Homepage/demoTradingContestsTable/demoTradingContestsTable';
import AzDiceTable from 'cmp/Homepage/azbitDiceTable/azbitDiceTable'
import Select from 'react-select';
import ValueSlider from 'cmp/Homepage/valueSlider/valueSlider';
import TotalUser from 'cmp/Homepage/totalUsers/';
import Header from 'cmp/header/';
import Footer from 'cmp/footer/';


import { useSelector, useDispatch } from "react-redux";
import actions from "act/";




export default () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.home.loadTotalUsers())
  }, []);

  let totalUsers = useSelector(state => state.TotalUsersReducer.totalUserData);
  let totalUsersList;
  if (totalUsers) {
    totalUsersList = totalUsers;
  }

  const colourStyles = {
    control: (styles) => {
      return {
        ...styles,
        backgroundColor: '#111622',
        border: "1px solid #1F2535",
        borderRadius: "0px",
        height: "20px",
        minHeight: "20px"
      }
    },
    container: (style) => {
      return {
        ...style,
        height: "20px"
      }
    },

    option: (styles) => {
      return {
        ...styles,
        backgroundColor: '#111622',
        border: "none",
        width: "115px",
        fontSize: "13px"
      }
    },

    indicatorSeparator: styles => ({
      ...styles,
      display: "none",
      padding: "0px"
    }),

    placeholder: styles => ({
      ...styles,
      color: "#fff",
      fontSize: "13px",
      top: "8px"
    }),
    dropdownIndicator: styles => ({
      ...styles,
      padding: "0px"
    }),
    indicatorsContainer: styles => ({
      ...styles,
      padding: "0px 5px 2px 0px",
    }),

    input: styles => ({
      margin: "0px",
    })

  }

  const options = [
    'BTC', 'ETH', 'USDT'
  ]
  return (

    <div className="App" id="home">
      <Header />
      <div className="main_container">
        <div className="home__side gray">
          <div className="home__side__assets">
            <div>
              <div className="container__logo">
                <span className="white__text">TOP&nbsp;</span>
                <span className="red__text">ASSETS</span>
              </div>
              <div className="output_field_flex">
                <div className="output_field_flex_space spacing1px">Bitcoin</div>
                <div className="nums white__text spasing1px">$ 3250.12</div>
              </div>
              <div className="output_field_flex">
                <div className="output_field_flex_space spacing1px">Litecoin</div>
                <div className="nums white__text spasing1px">$ 3250.12</div>
              </div>
              <div className="output_field_flex">
                <div className="output_field_flex_space spacing1px">Ethereum</div>
                <div className="nums white__text spasing1px">$ 3250.12</div>
              </div>
              <div className="output_field_flex">
                <div className="output_field_flex_space spacing1px">Ethereum</div>
                <div className="nums white__text spasing1px">$ 3250.12</div>
              </div>
              <div className="output_field_flex">
                <div className="output_field_flex_space spacing1px">Ethereum</div>
                <div className="nums white__text spasing1px">$ 3250.12</div>
              </div>
              <div className="output_field_flex">
                <div className="output_field_flex_space spacing1px">Ethereum</div>
                <div className="nums white__text spasing1px">$ 3250.12</div>
              </div>
            </div>
            <div className="topAssets_footer">
              <div className="spacing1px">
                Total market cap:&nbsp;<span className="white__text spacing1px">$127B</span>
              </div>
              <div className="totopAssets_footer_font spacing1px">
                view all supported assets...
                          </div>
            </div>
          </div>
          
          <div className="az_token_stats_container gray">
            <div className="container__logo">
              <span className="white__text">AZ&nbsp;</span>
              <span className="red__text">TOKEN&nbsp;</span>
              <span className="red__text">STATS</span>
            </div>
            <div className="txt_algn_left">To be burned in August:</div>
            <div className="txt_algn_rght white__text pad_bot_20px">62,091,092 AZ</div>
            <div className="txt_algn_left">Bonus to be distributed</div>
            <div className="txt_algn_left">in August:</div>
            <div className="txt_algn_rght white__text">91,092 USDT</div>
            <div className="txt_algn_rght white__text">worth of AZ tokens</div>
            <div className="az_token_stats__button_container">
              <button className="button_green">BUY AZ TOKENS</button>
            </div>
            <div className="az_news_undere_container">
              <div className="under_content_link">
                <a href="#viewAll" className="page__link">Historical stats</a>
              </div>
            </div>
          </div>
        </div>
        <div className="rightLine">
          <div className="slider_container gray">
            <Slider />
          </div>
          <div className="middle_container">
            <div className="middle_left_container gray">
              <div className="middle_left_container__header">
                <span className="red__text">Azbit&nbsp;</span>
                <span className="white__text">
                  is your one-stop crypto currency solution. Watch your wallet balance grow like a beanstalk.
                  Welcome to Bitcoin's most advanced trading platform. Up to 100x leverage. Trading without expiry dates.
                  Industry-leading security. Fastest growing Bitcoin trading platform.
                          </span>
                <div className="red__text read_more_link">
                  read more
                          </div>
              </div>
              <div className="ab_block_container">
                <div className="ad_block_container__col"><img alt="banner" height="149px" width="271px" src="https://instagram.fhel5-1.fna.fbcdn.net/vp/09f91895049d97218dcc1f6ac790681e/5E59E4E3/t51.2885-15/e35/71105880_2586491841586735_6638268876128714531_n.jpg?_nc_ht=instagram.fhel5-1.fna.fbcdn.net&_nc_cat=107" /></div>
                <div className="ad_block_container__col"><img alt="banner" height="149px" width="271px" src="https://instagram.fhel5-1.fna.fbcdn.net/vp/ab7dffe137ca7d4ef083747f40e61397/5E43D0B2/t51.2885-15/e35/75214724_742240336203263_4512569315964060440_n.jpg?_nc_ht=instagram.fhel5-1.fna.fbcdn.net&_nc_cat=111" /></div>
                <div className="ad_block_container__col"><img alt="banner" height="149px" width="271px" src="https://instagram.fhel5-1.fna.fbcdn.net/vp/1cd5ea707feca02f4c6564e3c8f40359/5E4D6A57/t51.2885-15/e35/71913308_568674427296098_2218246245596377167_n.jpg?_nc_ht=instagram.fhel5-1.fna.fbcdn.net&_nc_cat=102" /></div>
              </div>
              
              <div className="why_az_proj_container">
                <div className="container__logo">
                  <span className="white__text">WHY&nbsp;</span>
                  <span className="red__text">AZBIT&nbsp;</span>
                  <span className="red__text">PROJECT</span>
                </div>
                <div className="az_proj_content_container">
                  <div className="az_proj__container_item">
                    <div className="proj__container_card">
                      <div className="content_container">
                        <div>
                          <div className="card__text">8 000</div>
                          <div className="card__text">Users</div>
                          <div className="card__text">using our platform</div>
                        </div>
                        <div>
                          <div className="card__img">

                          </div>
                        </div>
                      </div>
                      <div className="card_under_text">Trust</div>
                    </div>
                    <div className="proj__container_card">
                      <div className="content_container">
                        <div>
                          <div className="card__text">29</div>
                          <div className="card__text">Top Crypto Assets</div>
                          <div className="card__text">Supported</div>
                        </div>
                        <div>
                          <div className="card__img">
                          </div>
                        </div>
                      </div>
                      <div className="card_under_text">Multi-asset</div>
                    </div>
                    <div className="proj__container_card">
                      <div className="content_container">
                        <div>
                          <div className="card__text">12M</div>
                          <div className="card__text">Total trading volume</div>
                          <div className="card__text">since Aug 2019</div>
                        </div>
                        <div>
                          <div className="card__img">

                          </div>
                        </div>
                      </div>
                      <div className="card_under_text">Fast growing</div>
                    </div>
                  </div>
                  <div className="az_proj__container_item middle__container_item">

                    <div className="proj__container_card flex card__text">
                      <div>In service since 2018</div>
                    </div>
                    <div className="proj__container_card flex card__text">
                      <div>Professional</div>
                      <div className="red__text"> CUSTOMER SERVICE</div>
                    </div>
                    <div className="proj__container_card">
                      <div className="content_container">
                        <div>
                          <div className="card__text red__text">20% of AZBIT PROFITS</div>
                          <div className="card__text">will be used for buy back</div>
                          <div className="card__text">and burn, increasing total</div>
                          <div className="card__text">demand</div>
                        </div>
                        <div>
                          <div className="card__img">
                          </div>
                        </div>
                      </div>

                      <div className="card_under_text">For investors</div>

                    </div>
                  </div>
                  <div className="az_proj__container_item">
                    <div className="proj__container_card">
                      <div className="content_container">
                        <div>
                          <div className="card__text">WALLET THAT PAYS</div>
                          <div className="card__text red__text">10% APY*INTEREST</div>
                          <div className="card__text">on average for HODLing your cryptos</div>
                        </div>
                        <div>
                          <div className="card__img">

                          </div>
                        </div>
                      </div>
                      <div className="card_under_text">Better than bank</div>
                    </div>
                    <div className="proj__container_card">
                      <div className="content_container">
                        <div>
                          <div className="card__text red__text">10% of AZBIT PROFITS</div>
                          <div className="card__text">distrubited among </div>
                          <div className="card__text">AZ token holders</div>
                        </div>
                        <div>
                          <div className="card__img">

                          </div>
                        </div>
                      </div>
                      <div className="card_under_text">Transparency</div>
                    </div>
                    <div className="proj__container_card">
                      <div className="content_container">
                        <div>
                          <div className="card__text">SWISS BASED</div>
                          <div className="card__text">Swiss-based</div>
                          <div className="card__text red__text">company</div>
                        </div>
                        <div>
                          <div className="card__img">

                          </div>
                        </div>
                      </div>
                      <div className="card_under_text">Security</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="middle_right_container gray">
              <TotalUser members={totalUsersList.members} assets={totalUsersList.assets} active_members={totalUsersList.active_members} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
