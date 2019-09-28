import React from 'react';
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
    const { setActiveView, activeProject, setActiveProject, user } = useStore();
    const routeFactory = (target) => () => {
        setActiveView(target);
        if (target === VIEWS.main) {
            setTimeout(() => {
                setActiveProject(null);
            }, 500);
        }
    };
    if (!activeProject) {
        return null;
    }
    let status = activeProject.participants.includes(user.id) ? STATUSES.participant : STATUSES.notMember;
    status = activeProject.admin === user.id ? STATUSES.admin : status;


	return (
		<Panel id={VIEWS.project}>
            <PanelHeaderSimple onBack={routeFactory(VIEWS.main)}>Проект</PanelHeaderSimple>
            <Group>
                <Cell
                    expandable
                    size="l"
                    description={activeProject.shortDescription}
                    before={<Avatar src={activeProject.image} />}
                    onClick={routeFactory(VIEWS.projectDetail)}
                    bottomContent={<Button level="commerce" disabled>{status === STATUSES.admin ? 'Вы администратор' : 'Вы участник'}</Button>}
                >
                    {activeProject.title}
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
