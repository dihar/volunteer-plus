import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import List from '@vkontakte/vkui/dist/components/List/List';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import CellButton from '@vkontakte/vkui/dist/components/CellButton/CellButton';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

const Catalog = ({ id, fetchedUser }) => (
	<Panel id={id}>
		<Group>
			<CellButton>Добавить новый проект</CellButton>
		</Group>
		{fetchedUser &&
		<List>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
				onClick={()=>{}}
				expandable
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
				onClick={()=>{}}
				expandable
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
				onClick={()=>{}}
				expandable
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
				onClick={()=>{}}
				expandable
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
				onClick={()=>{}}
				expandable
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
				onClick={()=>{}}
				expandable
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
				onClick={()=>{}}
				expandable
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</List>}
	</Panel>
);

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
