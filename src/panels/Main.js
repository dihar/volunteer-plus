import React, { useState, useEffect } from 'react';
import connect from '../vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import '@vkontakte/vkui/dist/vkui.css';
import { TABS, VIEWS } from '../constants';
import Catalog from './Catalog';
import Profile from './Profile';
import MyProjects from './MyProjects';
import { TabsPanel } from '../components/TabsPanel';
import { useStore } from '../stores/app-store';
import './styles.css';

const Main = () => {
	const { activeTab, setUser, user } = useStore();
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		async function fetchData() {
            const user = await connect.sendPromise('VKWebAppGetUserInfo');
            user.id = 10;
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, [setUser]);

	return (
		<Panel id={VIEWS.main}>
            <PanelHeader noShadow>ВолонтёрПлюс</PanelHeader>
            <TabsPanel />
            <div className='hack-panel'>
                <View activePanel={activeTab} popout={popout}>
                    <Catalog id={TABS.catalog} fetchedUser={user}/>
                    <MyProjects id={TABS.myProject} fetchedUser={user}/>
                    <Profile id={TABS.profile}/>
                </View>
            </div>
		</Panel>
	);
}

export default Main;

