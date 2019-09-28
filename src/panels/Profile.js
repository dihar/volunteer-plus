import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import persik from '../img/persik.png';

const Profile = ({ id }) => (
	<Panel id={id}>
		<img className="Persik" src={persik} alt="Persik The Cat" />
	</Panel>
);

Profile.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Profile;
