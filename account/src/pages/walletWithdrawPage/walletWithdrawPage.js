import React from 'react';
import './walletWithdrawPage.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import WithdrawDepositTab from '../../components/withdrawDepositTab/depositTab';
import WithdrawalTab from '../../components/withdrawalTab/withdrawalTab';
import WithdrawalHistoryTable from '../../components/withdrawalHistoryTable/withdrawalHistoryTable';

export default function WalletWithdrawPage() {
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