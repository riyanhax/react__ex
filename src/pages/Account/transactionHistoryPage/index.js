import React from 'react';
import './index.css';
import TransactionHistoryTable from'cmp/Account/transactionHistoryPage/transactionHistoryTable/';
import Pagination from 'cmp/Account/pagination/';

export default (props)=>{
    return(
        <>
            <div className="transaction_history_page__container">
                <div className="transaction_history__head_container">
                    <div className="container__logo">TRANSACTION <span className="red__text">HISTORY</span></div>
                    <div className="transaction_history__head_text">
                            <span className="red__text">Your account's transaction history.</span> Watch your wallet balance grow like a beanstalk. 
                            Welcome to Bitcoin's most advanced trading platform. Up to 100x leverage. 
                            Trading without expiry dates. Industry-leading security. Fastest growing Bitcoin trading platform.
                    </div>
                </div>
                <div className="container__logo">My history:</div>
                <TransactionHistoryTable/>
                <Pagination/>
            </div>
        </>
    );
}