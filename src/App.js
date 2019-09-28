import React, { useState, useEffect, Fragment } from 'react';
import connect from './vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import { TABS } from './constants';
import Catalog from './panels/Catalog';
import MyProjects from './panels/MyProjects';
import { TabsPanel } from './components/TabsPanel';

const App = () => {
	const [activePanel, setActivePanel] = useState(TABS.catalog);
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		connect.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await connect.sendPromise('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<Fragment>
			<TabsPanel activePanel={activePanel} setActivePanel={setActivePanel} />
			<View activePanel={activePanel} popout={popout}>
				<Catalog id={TABS.catalog} fetchedUser={fetchedUser} go={go} />
				<MyProjects id={TABS.myProject} go={go} />
			</View>
		</Fragment>
	);
}

export default App;

