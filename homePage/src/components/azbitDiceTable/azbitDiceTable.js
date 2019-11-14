import React from "react";

export default function AzDiceTable(){
    return(
        <>
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
                        <td className="az_dice_table_item white">3856635308</td>
                        <td className="az_dice_table_item white">21:18:39</td>
                        <td className="az_dice_table_item white">BTC</td>
                        <td className="az_dice_table_item white">Debble</td>
                        <td className="az_dice_table_item white">0.00000328</td>
                        <td className="az_dice_table_item white">{"<"}48</td>
                        <td className="az_dice_table_item white">49.172</td>
                        <td className="az_dice_table_item red">-0.00000328</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}