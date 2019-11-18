import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
export default (props) =>{
    return(
        <>
            <Tabs>
                <TabList className="cryp_curr_con_table_list">
                    <Tab className="cryp_curr_con_table_list__link"><i className="fa fa-star">&nbsp;</i>Favorites</Tab>
                    <Tab className="cryp_curr_con_table_list__link">BTC</Tab>
                    <Tab className="cryp_curr_con_table_list__link">ETH</Tab>
                    <Tab className="cryp_curr_con_table_list__link">AZ</Tab>
                    <Tab className="cryp_curr_con_table_list__link">USD(s)</Tab>
                </TabList>
                    <TabPanel>
                        <table>
                            <tbody>
                                <tr>
                                    <th className="cryp_curr_con_table_item">Pair</th>
                                    <th className="cryp_curr_con_table_item">Coin</th>
                                    <th className="cryp_curr_con_table_item">Last Price</th>
                                    <th className="cryp_curr_con_table_item">Change, 24h</th>
                                    <th className="cryp_curr_con_table_item">Volume, 24h</th>
                                </tr>
                                <tr className="cryp_curr_con_tab_line">
                                    <td className="cryp_curr_con_table_item white__text"><i className="fa fa-star">&nbsp;</i>XRP/BTS</td>
                                    <td className="cryp_curr_con_table_item white__text">Ripple</td>
                                    <td className="cryp_curr_con_table_item white__text ">0.63539</td>
                                    <td className="cryp_curr_con_table_item  red__text">2.45%</td>
                                    <td className="cryp_curr_con_table_item white__text">20392,12</td>
                                </tr>
                                <tr className="cryp_curr_con_tab_line">
                                    <td className="cryp_curr_con_table_item white__text"><i className="fa fa-star">&nbsp;</i>EOS/BTS</td>
                                    <td className="cryp_curr_con_table_item white__text">EOS</td>
                                    <td className="cryp_curr_con_table_item white__text">0.63539</td>
                                    <td className="cryp_curr_con_table_item green">2.45%</td>
                                    <td className="cryp_curr_con_table_item white__text">20392,12</td>
                                </tr>
                                <tr className="cryp_curr_con_tab_line">
                                    <td className="cryp_curr_con_table_item white__text"><i className="fa fa-star">&nbsp;</i>LTC/BTS</td>
                                    <td className="cryp_curr_con_table_item white__text">LTC</td>
                                    <td className="cryp_curr_con_table_item white__text">0.63539</td>
                                    <td className="cryp_curr_con_table_item red__text">2.45%</td>
                                    <td className="cryp_curr_con_table_item white__text">20392,12</td>
                                </tr>
                                <tr className="cryp_curr_con_tab_line">
                                    <td className="cryp_curr_con_table_item white__text"><i className="fa fa-star">&nbsp;</i>XMR/BTS</td>
                                    <td className="cryp_curr_con_table_item white__text"> XMR</td>
                                    <td className="cryp_curr_con_table_item white__text">0.63539</td>
                                    <td className="cryp_curr_con_table_item green">2.45%</td>
                                    <td className="cryp_curr_con_table_item white__text">20392,12</td>
                                </tr>
                                <tr className="cryp_curr_con_tab_line">
                                    <td className="cryp_curr_con_table_item white__text"><i className="fa fa-star">&nbsp;</i>ADA/BTS</td>
                                    <td className="cryp_curr_con_table_item white__text">ADA</td>
                                    <td className="cryp_curr_con_table_item white__text">0.63539</td>
                                    <td className="cryp_curr_con_table_item red__text">2.45%</td>
                                    <td className="cryp_curr_con_table_item white__text">20392,12</td>
                                </tr>
                                <tr className="cryp_curr_con_tab_line">
                                    <td className="cryp_curr_con_table_item white__text"><i className="fa fa-star">&nbsp;</i>XRP/BTS</td>
                                    <td className="cryp_curr_con_table_item white__text">XRP</td>
                                    <td className="cryp_curr_con_table_item white__text">0.63539</td>
                                    <td className="cryp_curr_con_table_item green">2.45%</td>
                                    <td className="cryp_curr_con_table_item white__text">20392,12</td>
                                </tr>
                            </tbody>
                        </table>
                    </TabPanel>
                    <TabPanel>KIRILL</TabPanel>
                    <TabPanel>PRIVET</TabPanel>
                    <TabPanel>PORA</TabPanel>
                    <TabPanel>NA</TabPanel>
            </Tabs>
        </>
    );
}