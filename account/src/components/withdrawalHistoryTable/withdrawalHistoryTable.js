import React from 'react';
import './withdrawalHistoryTable.css';
import Pagination from '../pagination/pagination';

export default function WithdrawalHistoryTable() {
    let dropHandleClick = event => {
        if(event.currentTarget.previousSibling.classList.contains('show')){
            event.currentTarget.previousSibling.classList.remove('show');
            event.target.classList.remove('fa-sort-up');
            event.target.classList.add('fa-sort-down');
        } else{
            event.currentTarget.previousSibling.classList.add('show');
            event.target.classList.remove('fa-sort-down');
            event.target.classList.add('fa-sort-up');
        }
    };
    return (
        <>
            <div className="history_table__container">
                <table className="history_table">
                    <tbody>
                        <tr className="history_table__tr">
                            <th className="history_table__item">Status</th>
                            <th className="history_table__item">Coin</th>
                            <th className="history_table__item">Amount</th>
                            <th className="history_table__item">Date</th>
                            <th className="history_table__item">Information</th>
                        </tr>
                        <tr className="history_table__tr">
                            <td className="history_table__item">Completed</td>
                            <td className="history_table__item">BTC</td>
                            <td className="history_table__item">0.2216258</td>
                            <td className="history_table__item">2018-03-06 02:28:52</td>
                            <td className="history_table__item address">Address:146r3ziJJiA6JSrvMeseY473cY4DGoJkFD146r3ziJJiA6JSrvMeseY473cY4DGoJkFD146r3ziJJiA6JSr3ziJJiA6</td>
                            <td onClick={dropHandleClick} className="history_table__drop_item">
                                <div className="fa fa-sort-down"></div>
                            </td>
                        </tr>
                        <tr className="history_table__tr">
                            <td className="history_table__item">Completed</td>
                            <td className="history_table__item">BTC</td>
                            <td className="history_table__item">0.2216258</td>
                            <td className="history_table__item">2018-03-06 02:28:52</td>
                            <td className="history_table__item address">Address: 146r3ziJJiA6JSrvMeseY473cY4DGoJkFD146r3ziJ JiA6JSrvMeseY473cY4DGoJkFD146r3ziJJiA6JSr3ziJJiA6</td>
                            <td onClick={dropHandleClick} className="history_table__drop_item">
                                <div className="fa fa-sort-down"></div>
                            </td>
                        </tr>
                        <tr className="history_table__tr">
                            <td className="history_table__item">Completed</td>
                            <td className="history_table__item">BTC</td>
                            <td className="history_table__item">0.2216258</td>
                            <td className="history_table__item">2018-03-06 02:28:52</td>
                            <td className="history_table__item address">Address: 146r3ziJJiA6JSrvMeseY473cY4DGoJkFD146r3ziJ JiA6JSrvMeseY473cY4DGoJkFD146r3ziJJiA6JSr3ziJJiA6</td>
                            <td onClick={dropHandleClick} className="history_table__drop_item">
                                <div className="fa fa-sort-down"></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Pagination />

        </>
    );
}