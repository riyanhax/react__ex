import React,{useEffect} from 'react';
import './index.css';
import CustomSelect from 'cmp/Account/customSelect/';
import { useSelector, useDispatch } from "react-redux";
import actions from "act/";

export default  (props)=>{
    let dispatch = useDispatch();

useEffect(()=>{
    dispatch(actions.account.getPublicCurrencies());
   },[])

   let publicCurrencies = useSelector(state => state.publicCurrenciesReducer.pubCurrencies);
   let options;
   let customSelect;
   let handleChangeCurrency = (e) =>{
        dispatch(actions.account.getWalletAddress(e.id));
    }

   if(publicCurrencies){
     options = publicCurrencies.map( (item)=>{
        return(
            {
                    id:item.id,
                    label:item.id.toUpperCase(),
            }
        );
         })
         customSelect=<CustomSelect  options={options} defaultValue={options[0]} handleChangeCurrency={handleChangeCurrency}/>
    }

   
    let address = useSelector(state => state.depositWalletReducer.walletAddress);
    
    return(
        <>
            <div className="withdraw_deposit_tab__container">
                <div>
                    {customSelect}
                    <div className="withdraw_deposit_tab__deposit_form">
                        <div className="deposit_form__top_container">
                            <div className="white__text"><i className="fab fa-bitcoin"></i>AZ - Azbit Tokens</div>
                            <div className="white__text">Wallet address:</div>
                        </div>
                        <div className="deposit_form__output_field">
                            {/*change currency on address*/}
                            {address?address.currency:'wait'}
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