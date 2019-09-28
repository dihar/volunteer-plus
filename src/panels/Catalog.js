import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import List from '@vkontakte/vkui/dist/components/List/List';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import CellButton from '@vkontakte/vkui/dist/components/CellButton/CellButton';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import { VIEWS } from '../constants';
import { useStore } from '../stores/app-store';

const Catalog = ({ id }) => {
	const { setActiveView, projects, setActiveProject } = useStore();
	const onProjectClick = (project) => {
		setActiveProject(project);
		setActiveView(VIEWS.projectDetailOnly);
	};
	const onNewClick = () => {
		setActiveView(VIEWS.form);
	};

	return (
		<Panel id={id}>
			<Group>
				<CellButton onClick={onNewClick}>Добавить новый проект</CellButton>
			</Group>
			<List>
				{projects.map(project => (
					<Cell
						key={project.id}
						before={project.image ? <Avatar src={project.image}/> : null}
						description={project.shortDescription}
						onClick={() => onProjectClick(project)}
						expandable
					>
						{project.title}
					</Cell>
				))}
			</List>
		</Panel>
	);
};

Catalog.propTypes = {
	id: PropTypes.string.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Catalog;
