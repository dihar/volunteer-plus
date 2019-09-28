import React, { useState } from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import UsersStack from '@vkontakte/vkui/dist/components/UsersStack/UsersStack';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import '@vkontakte/vkui/dist/vkui.css';
import PanelHeaderSimple from '../components/PanelHeaderSimple';
import Messages from '../components/Messages';
import { VIEWS, STATUSES} from '../constants';
import { useStore } from '../stores/app-store';

const Project = () => {
    const { setActiveView } = useStore();
    const [status] = useState(STATUSES.notMember);
    const routeFactory = (target) => () => setActiveView(target);


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
                    bottomContent={<Button level="commerce" disabled>{status === STATUSES.admin ? 'Вы администратор' : 'Вы участник'}</Button>}
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
            <Messages />
		</Panel>
	);
}

export default Project;
