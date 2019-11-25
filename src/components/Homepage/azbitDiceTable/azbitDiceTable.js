import React from "react";

export default function AzDiceTable(){
    return(
            <table className="az_dice_table">
                <tbody>
                    <tr>
                        <th className="az_dice_table_item">Game</th>
                        <th className="az_dice_table_item">Time</th>
                        <th className="az_dice_table_item">Coin</th>
                        <th className="az_dice_table_item">User</th>
                        <th className="az_dice_table_item">Bet</th>
                        <th className="az_dice_table_item">Target</th>
                        <th className="az_dice_table_item">Roll</th>
                        <th className="az_dice_table_item">Profit</th>
                    </tr>
                    <tr>
                        <td className="az_dice_table_item white__text">3856635308</td>
                        <td className="az_dice_table_item white__text">21:18:39</td>
                        <td className="az_dice_table_item white__text">BTC</td>
                        <td className="az_dice_table_item white__text">Debble</td>
                        <td className="az_dice_table_item white__text">0.00000328</td>
                        <td className="az_dice_table_item white__text">{"<"}48</td>
                        <td className="az_dice_table_item white__text">49.172</td>
                        <td className="az_dice_table_item red__text">-0.00000328</td>
                    </tr>
                </tbody>
            </table>
    )
}