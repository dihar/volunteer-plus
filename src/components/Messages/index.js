import React, { Fragment } from 'react';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Input from '@vkontakte/vkui/dist/components/Input/Input';
import messagesData from './data.json';
import './styles.css';

const Messages = () => {
    return (
        <Group title="Обсуждение">
            <div style={{ maxHeight: '500px', overflow: 'auto' }}>
                {messagesData.map((message, i) => (
                    <Fragment key={i}>
                        <Cell
                            size="m"
                            description={message.description}
                            before={<Avatar src={message.avatar}/>}
                        >
                            {message.name}
                        </Cell>
                        {message.messages.map((text, j) => (
                            <Cell key={j}><div className="message-text">{text}</div></Cell>
                        ))}
                        <Cell><div className="message-time">{message.time}</div></Cell>
                    </Fragment>
                ))}
            </div>
            <Cell><Input type="text" placeholder="Ответить..."/></Cell>
        </Group>
    );
};

export default Messages;
