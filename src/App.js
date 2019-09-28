import React, { useEffect } from 'react';
import connect from './vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';
import Main from './panels/Main';
import { VIEWS } from './constants';

const App = () => {
	useEffect(() => {
		connect.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
	}, []);

	return (
		<View activePanel={VIEWS.main}>
			<Main id={VIEWS.main} />
		</View>
	);
}

export default App;

