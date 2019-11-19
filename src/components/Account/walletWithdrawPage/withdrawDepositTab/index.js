import React from 'react';
import './index.css';
import CustomSelect from 'cmp/Account/customSelect/';

export default  (props)=>{
    return(
        <>
            <div className="withdraw_deposit_tab__container">
                <div>
                    <CustomSelect/>
                    <div className="withdraw_deposit_tab__deposit_form">
                        <div className="deposit_form__top_container">
                            <div className="white__text"><i className="fab fa-bitcoin"></i>AZ - Azbit Tokens</div>
                            <div className="white__text">Wallet address:</div>
                        </div>
                        <div className="deposit_form__output_field">
                            35fK4bc7Nv7cjM6AfVNm21X1AyDpar1qDc
                        </div>
                        <div className="deposit_form__buttons_container">
                            <button className="button_green">COPY ADDRESS</button>
                            <button className="button_green">SHOW QR CODE</button>
                        </div>
                    </div>
                </div>
                <div className="deposit_form__total_container">
                    <div className="deposit_form__output_field_container">
                        <div className="deposit_form__output_field">
                            <div>Total balance:</div>
                            <div className="white__text">2192.12 AZ</div>
                        </div>
                        <div className="deposit_form__output_field">
                            <div>On Orders:   </div>
                            <div className="white__text">0 AZ</div>
                        </div>
                        <div className="deposit_form__output_field">
                            <div>Available balance: </div>
                            <div className="white__text">2192.12 AZ</div>
                        </div>
                    </div>
                    <div className="deposit_form__text_container">
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