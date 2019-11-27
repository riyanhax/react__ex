
import React ,{ useEffect } from 'react';
import './index.css';
import { useSelector, useDispatch } from "react-redux";
import actions from "act/";
import { Link } from 'react-router-dom';


export default (props) => {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(actions.asccountSideBar.getAccountWalletCurrency())
    },[])

    let mainWalletCurrency = useSelector(state => state.mainWalletCurrencyReducer.walletCurrency);
    let mainWalletCurrencyList;

    if(mainWalletCurrency){
        mainWalletCurrencyList=mainWalletCurrency;
    }


    return (
        <>
            <div className="account_sidebar__container">
                <div className="account_sidebar__wallets__container">
                    <div className="container__logo">
                        <span className="white__text">MY</span><span className="red__text">CABINET</span>
                    </div>
                    <div className="wallet__container">
                        <div className="wallet__data_container">
                            <div>Main wallet:</div>
                            <div className="wallet__values_container">

                                <div className="white__text">{mainWalletCurrencyList.btc_sum} BTC</div>
                                <div className="white__text">±{mainWalletCurrencyList.usd_sum} USD</div>

                            </div>
                        </div>
                    </div>
                    {/* <div className="wallet__container">
                        <div className="wallet__data_container">
                            <div>Margin trading:</div>
                            <div className="wallet__values_container">

                                <div className="white__text">0 BTC</div>
                                <div className="white__text">0 USD</div>

                            </div>
                        </div>
                    </div>
                    <div className="wallet__container">
                        <div className="wallet__data_container">
                            <div>Margin lending:</div>
                            <div className="wallet__values_container">

                                <div className="white__text">0 BTC</div>
                                <div className="white__text">0 USD</div>
                            </div>
                        </div>
                    </div>
                    <div className="wallet__container">
                        <div className="wallet__data_container">
                            <div>Lender’s deposits</div>
                            <div className="wallet__values_container">
                                <div className="white__text">0 BTC</div>
                                <div className="white__text">0 USD</div>
                            </div>
                        </div>
                    </div> */}
                    <div className="account_sidebar__wallets__button_container">
                        <div>
                            <button className="button__green" >
                                <Link to="/account/wallet/withdraw">deposit</Link>
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}