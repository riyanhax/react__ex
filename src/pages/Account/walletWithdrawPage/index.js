import React from 'react';
import './index.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import WithdrawDepositTab from 'cmp/Account/walletWithdrawPage/withdrawDepositTab/';
import WithdrawalTab from 'cmp/Account/walletWithdrawPage/withdrawalTab/';
import WithdrawalHistoryTable from 'cmp/Account/walletWithdrawPage/withdrawalHistoryTable/';

export default (props) => {
    return (
        <>
            <div className="wallet_withdraw_tab__container">
                <div className="container__logo">
                    <span className="white__text">MY</span> <span className="red__text">BALANCES</span>
                </div>
                <Tabs>
                    <TabList className="wallet_withdraw__tab_list">
                        <Tab className="wallet_withdraw__tab">Deposit</Tab>
                        <Tab className="wallet_withdraw__tab">Withdrawal</Tab>
                    </TabList>
                    <TabPanel>  
                        <WithdrawDepositTab/>
                    </TabPanel>
                    <TabPanel>
                        <WithdrawalTab/>
                    </TabPanel>
                </Tabs>
            </div>
            <div className="wallet_withdraw__history_table_container">
                <div className="container__logo">
                    <span className="white__text">Withdrawal history:</span>
                </div>
                <WithdrawalHistoryTable/>
            </div>
            
        </>
    );
}