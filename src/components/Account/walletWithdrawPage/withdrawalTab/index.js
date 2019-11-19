import React from 'react';
import CustomSelect from 'cmp/Account/customSelect/';
import './index.css';


export default (props) => {
    return (
        <>
            <div className="withdraw_deposit_tab__container">
                <div>
                    <CustomSelect />
                    <div className="withdrawl_tab__withdraw_form">
                        <div className="withdraw_form__top_container white__text">
                            <i className="fab fa-bitcoin"></i>AZ - Azbit Tokens
                            </div>
                        <div className="withdraw_address__container">
                            <div>Withdrawal address:</div>
                            <div>
                                <input className="withdrawal_form__input_field"></input>
                            </div>
                        </div>
                        <div className="amount_withdraw__container">
                            <div className="white__text">Amount to withdraw:</div>
                            <div className="amount_withdraw__input_container">
                                <div>
                                    <input className="withdrawal_form__input_field"></input>
                                </div>
                                <div className="available_icon">
                                    Available: 2192.12
                                </div>
                                <div>
                                    AZ
                                </div>
                            </div>
                            <div className="flex">
                                <div>
                                    <div>Transaction fee: 0.00000</div>
                                    <div>You will get: 0.0000000</div>
                                </div>
                                <div>
                                    24h limit: 0 / 2 BTC
                                    </div>
                            </div>
                        </div>
                        <div className="amount_withdraw__button_container">
                            <button className="button__green">WITHDRAW</button>
                        </div>
                    </div>
                </div>

                <div className="withdrawal_form__total_container">
                    <div className="withdrawal_form__output_field_container">
                        <div className="withdrawal_form__output_field">
                            <div>Total balance:</div>
                            <div className="white__text">2192.12 AZ</div>
                        </div>
                        <div className="withdrawal_form__output_field">
                            <div>On Orders:   </div>
                            <div className="white__text">0 AZ</div>
                        </div>
                        <div className="withdrawal_form__output_field">
                            <div>Available balance: </div>
                            <div className="white__text">2192.12 AZ</div>
                        </div>
                    </div>
                    <div className="withdrawal_form__text_container">
                        <div className="red__text"> Important:</div>
                        <div>
                            -  Address is not allowed to deposit any other assets other than AZ,
                                 and any other asset deposit will not be recovered.
                        </div>
                        <div>
                            - The deposit transaction will be automatic,
                            and the BTC transfer will need to be confirmed by the entire BTC network,
                            and your BTC will be automatically deposited to your account after 3 confirmation.
                        </div>
                        <div>
                            - This address is the only one you can use on your own, and you can do multiple recharging at the same time.
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}