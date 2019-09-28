import React, { useState } from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import UsersStack from '@vkontakte/vkui/dist/components/UsersStack/UsersStack';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import '@vkontakte/vkui/dist/vkui.css';
import PanelHeaderSimple from '../components/PanelHeaderSimple'
import { VIEWS } from '../constants';
import { useStore } from '../stores/app-store';

const STATUSES = {
    participant: 'participant',
    admin: 'admin',
    noTMember: 'noTMember'
};

const Project = () => {
    const { setActiveView } = useStore();
    const [status, setStatus] = useState(STATUSES.noTMember);
    const routeFactory = (target) => () => setActiveView(target);
    const onSetRandomStatus = (event) => {
        event.stopPropagation();
        setStatus(Math.floor(Math.random() * 2) ? STATUSES.admin : STATUSES.participant);
    };
    const isActive = status !== STATUSES.noTMember;

	return (
		<Panel id={VIEWS.project}>
            <PanelHeaderSimple onBack={routeFactory(VIEWS.main)}>Проект</PanelHeaderSimple>
            <Group>
                <Cell
                    expandable
                    size="l"
                    description="Посадить 20 берёз в Коломенском парке"
                    before={<Avatar src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" />}
                    onClick={routeFactory(VIEWS.projectDetail)}
                    bottomContent={isActive ? (
                        <Button level="commerce" disabled>{status === STATUSES.admin ? 'Вы администратор' : 'Вы участник'}</Button>
                     ) : (
                        <Button onClick={onSetRandomStatus}>Присоединиться к проекту</Button>
                     )}
                >
                    Проект посадки деревьев
                </Cell>
            </Group>
            <Group>
                <UsersStack
                    photos={[
                        'https://sun9-6.userapi.com/c846121/v846121540/195e4d/17NeSTKMR1o.jpg?ava=1',
                        'https://sun9-30.userapi.com/c845017/v845017447/1773bb/Wyfyi8-7e5A.jpg?ava=1',
                        'https://sun9-25.userapi.com/c849432/v849432217/18ad61/0UFtoEhCsgA.jpg?ava=1'
                    ]}
                    onClick={routeFactory(VIEWS.partials)}
                >12 участников</UsersStack>
            </Group>
            <Group>
                <Cell
                    expandable
                    size="l"
                    description="Выполнено 4 из 9 заданий"
                    onClick={routeFactory(VIEWS.checkList)}
                >
                    Задачи проекта
                </Cell>
            </Group>
		</Panel>
	);
}

export default Project;
