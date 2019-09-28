import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import List from '@vkontakte/vkui/dist/components/List/List';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import { VIEWS } from '../constants';
import { useStore } from '../stores/app-store';

const MyProjects = ({ id, fetchedUser }) => {
	const { setActiveView, projects, setActiveProject, user } = useStore();
	const onProjectClick = (project) => () => {
		setActiveProject(project);
		setActiveView(VIEWS.project);
	};
	const orgProjects = projects.filter(project => project.admin === user.id);
	const partProjects = projects.filter(project => project.admin !== user.id && project.participants.includes(user.id));

	return (
		<Panel id={id}>
			{fetchedUser &&
				<React.Fragment>
					<Group title='Организатор'>
						<List>
							{orgProjects.map(project => (
								<Cell
									key={project.title}
									before={project.image ? <Avatar src={project.image}/> : null}
									description={project.shortDescription}
									onClick={onProjectClick(project)}
									expandable
								>
									{project.title}
								</Cell>
							))}
						</List>
					</Group>
					<Group title='Участник'>
						<List>
							{partProjects.map(project => (
								<Cell
									key={project.title}
									before={project.image ? <Avatar src={project.image}/> : null}
									description={project.shortDescription}
									onClick={onProjectClick(project)}
									expandable
								>
									{project.title}
								</Cell>
							))}
						</List>
					</Group>
				</React.Fragment>
			}
		</Panel>
	);
};

MyProjects.propTypes = {
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

export default MyProjects;
