import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import profile from '../img/profile.png';

const Profile = ({ id }) => (
	<Panel id={id}>
		<img className="profile-image" src={profile} alt="profile" />
	</Panel>
);

Profile.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Profile;
