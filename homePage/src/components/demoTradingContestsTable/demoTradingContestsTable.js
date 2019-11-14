import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function DemoTradConTable(){
    return(
        <>
            <Tabs>
                <TabList className="cryp_curr_con_table_list row_reverse">
                    <Tab className="cryp_curr_con_table_list__link">All contests</Tab>
                    <Tab className="cryp_curr_con_table_list__link">Announced</Tab>
                    <Tab className="cryp_curr_con_table_list__link">Current</Tab>
                    <Tab className="cryp_curr_con_table_list__link">Complited</Tab>
                </TabList>
                <TabPanel>
                    <table>
                        <tbody>
                            <tr>
                                <th className="dem_trad_con_tab_item">Contests #</th>
                                <th className="dem_trad_con_tab_item">Start Date</th>
                                <th className="dem_trad_con_tab_item">End Date</th>
                                <th className="dem_trad_con_tab_item">Prize fund</th>
                                <th className="dem_trad_con_tab_item">Status</th>
                            </tr>
                            <tr className="cryp_curr_con_tab_line">
                                <td className="dem_trad_con_tab_item white" >Monthly 8</td>
                                <td className="dem_trad_con_tab_item white">12.11.18</td>
                                <td className="dem_trad_con_tab_item white">12.11.18</td>
                                <td className="dem_trad_con_tab_item white">500 USDT</td>
                                <td className="dem_trad_con_tab_item white">In Progress</td>
                            </tr>
                        </tbody>
                    </table>
                </TabPanel>
                <TabPanel>  </TabPanel>
                <TabPanel>  </TabPanel>
                <TabPanel>  </TabPanel>
            </Tabs>
        </>
    );
}