import React, { useEffect } from 'react';
import connect from './vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';
import Main from './panels/Main';
import Project from './panels/Project';
import ProjectDetail from './panels/ProjectDetail';
import Partials from './panels/Partials';
import { VIEWS } from './constants';
import { useStore } from './stores/app-store';

const App = () => {
	const { activeView } = useStore();

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
		<View activePanel={activeView}>
			<Main id={VIEWS.main} />
			<Project id={VIEWS.project} />
			<ProjectDetail id={VIEWS.projectDetail} />
			<Partials id={VIEWS.partials} />
		</View>
	);
}

export default App;

