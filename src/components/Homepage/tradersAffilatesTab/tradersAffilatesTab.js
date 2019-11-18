import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function TradersAffilatesTab() {
    return (
        <>
            <Tabs>
                <TabList className="ta_tab__list">
                    <Tab className="ta_tabs__link">Traders</Tab>
                    <Tab className="ta_tabs__link">Affilates</Tab>
                </TabList>
                <TabPanel className="ta_tab_pannel">

                    <div className="tab__panel__inner">
                        <div className="outputFieldFlexStart">1. m****@gmail.com</div>
                        <div className="outputFieldFlexStart">2. m****@gmail.com</div>
                        <div className="outputFieldFlexStart">3. m****@gmail.com</div>
                        <div className="outputFieldFlexStart">4. m****@gmail.com</div>
                        <div className="outputFieldFlexStart">5. m****@gmail.com</div>
                    </div>
                </TabPanel>
                <TabPanel className="ta_tab_pannel">
                    <div className="tab__panel__inner">
                        <div className="outputFieldFlexStart">1. n****@gmail.com</div>
                        <div className="outputFieldFlexStart">2. n****@gmail.com</div>
                        <div className="outputFieldFlexStart">3. n****@gmail.com</div>
                        <div className="outputFieldFlexStart">4. n****@gmail.com</div>
                        <div className="outputFieldFlexStart">5. n****@gmail.com</div>
                    </div>
                </TabPanel>
            </Tabs>
        </>
    );
}