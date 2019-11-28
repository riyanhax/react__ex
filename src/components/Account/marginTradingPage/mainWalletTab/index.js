import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import actions from "act/";
import BalancesTable from 'cmp/Account/marginTradingPage/balancesTable/';
import './index.css';

export default (props) => {
    let dispatch = useDispatch();



    useEffect(() => {
        dispatch(actions.accountMarginTrading.getBalanceTable())
    }, [])
    
    const getBalanceBy = (balancesList,filter,smallBalnceFlag) =>{
        if(smallBalnceFlag && filter)
                return balancesList.filter(item => item.asset.toLowerCase().indexOf(filter.toLowerCase()) > -1 && item.balance>0)
        if(smallBalnceFlag && !filter)
            return balancesList.filter(item =>item.balance>0);
        if(!smallBalnceFlag && filter)
            return balancesList.filter(item => item.asset.toLowerCase().indexOf(filter.toLowerCase()) > -1);
        return balancesList;
    }


    //let balances = useSelector(state => state.marginTradingReducer.balancesTable);
    let balances = getBalanceBy(useSelector(state => state.marginTradingReducer.balancesTable),useSelector(state => state.marginTradingReducer.searchValue),useSelector(state => state.marginTradingReducer.flag));
    return (
        <>
            <div className="main_wallet__tab_panel_top_line">
                <div>
                    <input onChange={(e) => { dispatch(actions.accountMarginTrading.setSearchValue(e.target.value))}} className="main_wallet__search_coin_input" type="text" placeholder="Search coin" /><i className="fa fa-search"></i>
                </div>
                <div className="main_wallet__right_col">
                    <div>
                        <label className="check_box__container">
                            Hide small balances<i className="fa fa-question"></i>
                            <input onChange={e=>dispatch(actions.accountMarginTrading.hideSmallBalances(e.target.checked))} type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div>
                        <button className="button_green">CONVERT TO AZ</button>
                    </div>
                </div>
            </div>
            {balances ? <BalancesTable balances={balances} /> : 'wait..'}


        </>
    );
}