import React from 'react';
import Snackbar from '@vkontakte/vkui/dist/components/Snackbar/Snackbar';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Icon16Done from '@vkontakte/icons/dist/24/done';
import { useStore } from '../../stores/app-store';

const blueBackground = {
    backgroundColor: 'var(--accent)'
};

const Alert = () => {
    const { alert } = useStore();

    return Boolean(alert) && (
        <Snackbar
            layout="vertical"
            onClose={() => this.setState({ snackbar: null })}
            before={<Avatar size={24} style={blueBackground}><Icon16Done fill="#fff" width={14} height={14} /></Avatar>}
        >
            {alert}
      </Snackbar>
    );
};

export default Alert;
