import React from 'react';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import HorizontalScroll from '@vkontakte/vkui/dist/components/HorizontalScroll/HorizontalScroll';
import TabsItem from '@vkontakte/vkui/dist/components/TabsItem/TabsItem';
import Tabs from '@vkontakte/vkui/dist/components/Tabs/Tabs';
import { useStore } from '../../stores/app-store';
import { tabs } from './config';

export const TabsPanel = () => {
    const { activeTab, setActiveTab} = useStore();

    return (
        <FixedLayout vertical="top">
            <Tabs theme="header" type="buttons">
                <HorizontalScroll>
                    {tabs.map(tab => (
                        <TabsItem
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            selected={activeTab === tab.id}
                        >
                            {tab.title}
                        </TabsItem>
                    ))}
                </HorizontalScroll>
            </Tabs>
        </FixedLayout>
    );
};
