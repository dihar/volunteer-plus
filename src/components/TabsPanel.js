import React from 'react';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import HorizontalScroll from '@vkontakte/vkui/dist/components/HorizontalScroll/HorizontalScroll';
import TabsItem from '@vkontakte/vkui/dist/components/TabsItem/TabsItem';
import Tabs from '@vkontakte/vkui/dist/components/Tabs/Tabs';
import { TABS } from '../constants';


export const TabsPanel = ({ id, activePanel, setActivePanel }) => (
    <FixedLayout vertical="top">
        <Tabs theme="header" type="buttons">
            <HorizontalScroll>
                <TabsItem
                    onClick={() => setActivePanel(TABS.catalog)}
                    selected={activePanel === TABS.catalog}
                >
                    Каталог
                </TabsItem>
                <TabsItem
                    onClick={() => setActivePanel(TABS.myProject)}
                    selected={activePanel === TABS.myProject}
                >
                    Мои проекты
                </TabsItem>
                <TabsItem
                    onClick={() => setActivePanel(TABS.profile)}
                    selected={activePanel === TABS.profile}
                >
                    Профиль
                </TabsItem>
            </HorizontalScroll>
        </Tabs>
    </FixedLayout>
);
