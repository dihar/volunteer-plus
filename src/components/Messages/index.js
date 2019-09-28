import React, { Fragment, useState } from 'react';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Tabs from '@vkontakte/vkui/dist/components/Tabs/Tabs';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import TabsItem from '@vkontakte/vkui/dist/components/TabsItem/TabsItem';
import Input from '@vkontakte/vkui/dist/components/Input/Input';
import messagesData from './data.json';
import messagesAllData from './dataMess.json';
import './styles.css';

const Messages = () => {
    const [active, setActive] = useState('dial');
    const mess = active === 'messages' ? messagesData : messagesAllData;

    return (
        <Fragment>
            <Group>
                <Cell>
                    <Tabs type="buttons">
                        <TabsItem
                            onClick={() => setActive('dial')}
                            selected={active === 'dial'}
                        >
                            Общий чат
                        </TabsItem>
                        <TabsItem
                            onClick={() => setActive('messages')}
                            selected={active === 'messages'}
                        >
                            По задаче
                        </TabsItem>
                        <TabsItem
                            onClick={() => setActive('private')}
                            selected={active === 'private'}
                        >
                            Личный чат
                        </TabsItem>
                    </Tabs>
                </Cell>
                <div style={{ maxHeight: '300px', overflow: 'auto' }}>
                    {mess.map((message, i) => (
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
                <Cell><Button>Отправить</Button></Cell>
            </Group>
        </Fragment>
    );
};

export default Messages;
