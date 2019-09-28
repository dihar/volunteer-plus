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
	const { setActiveView } = useStore();
	const onProjectClick = () => {
		setActiveView(VIEWS.project);
	};

	return (
		<Panel id={id}>
			{fetchedUser &&
				<React.Fragment>
					<Group title='Организатор'>
						<List>
							<Cell
								before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
								description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
								onClick={onProjectClick}
								expandable
							>
								{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
							</Cell>
							<Cell
								before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
								description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
								onClick={onProjectClick}
								expandable
							>
								{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
							</Cell>
							<Cell
								before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
								description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
								onClick={onProjectClick}
								expandable
							>
								{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
							</Cell>
						</List>
					</Group>
					<Group title='Участник'>
						<List>
							<Cell
								before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
								description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
								onClick={onProjectClick}
								expandable
							>
								{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
							</Cell>
							<Cell
								before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
								description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
								onClick={onProjectClick}
								expandable
							>
								{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
							</Cell>
							<Cell
								before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
								description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
								onClick={onProjectClick}
								expandable
							>
								{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
							</Cell>
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