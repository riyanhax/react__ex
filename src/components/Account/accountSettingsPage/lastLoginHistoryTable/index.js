import React from 'react';
import './index.css';

export default (props) => {
    return (
        <>
            <div className="container__logo">LAST LOGIN HISTORY </div>
            <div className="log_history_table__container">
                <table className="log_history_table">
                    <tbody>
                        <tr className="log_history_table__tr">
                            <th className="log_history_table__th">Date</th>
                            <th className="log_history_table__th">ID Address</th>
                            <th className="log_history_table__th">Location</th>
                        </tr>
                        <tr className="log_history_table__tr">
                            <td className="log_history_table__td">2019-01-23 19:52:44</td>
                            <td className="log_history_table__td">237.215.13.241</td>
                            <td className="log_history_table__td">Minsk Belarus</td>
                        </tr>
                        <tr className="log_history_table__tr">
                            <td className="log_history_table__td">2019-01-23 19:52:44</td>
                            <td className="log_history_table__td">237.215.13.241</td>
                            <td className="log_history_table__td">Minsk Belarus</td>
                        </tr>
                        <tr className="log_history_table__tr">
                            <td className="log_history_table__td">2019-01-23 19:52:44</td>
                            <td className="log_history_table__td">237.215.13.241</td>
                            <td className="log_history_table__td">Minsk Belarus</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}