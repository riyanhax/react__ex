import React from 'react';
import './index.css';


export default (props) => {
    let tableRow = props.history.map((item, index) => {
        return (
            <tr className="log_history_table__tr">
                <td className="log_history_table__td">{item.created_at}</td>
                <td className="log_history_table__td">{item.user_ip}</td>
                <td className="log_history_table__td">Minsk Belarus</td>
            </tr>
        )
    })
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
                        {tableRow}
                    </tbody>
                </table>
            </div>
        </>
    );
}