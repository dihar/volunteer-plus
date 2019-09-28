import React, { useEffect } from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import List from '@vkontakte/vkui/dist/components/List/List';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Icon24Document from '@vkontakte/icons/dist/24/document';
import Icon24Info from '@vkontakte/icons/dist/24/info';
import '@vkontakte/vkui/dist/vkui.css';
import PanelHeaderSimple from '../components/PanelHeaderSimple';
import { VIEWS, STATUSES } from '../constants';
import { useStore } from '../stores/app-store';

const ProjectDetailOnly = () => {
    const { setActiveView, activeProject, setActiveProject, user } = useStore();
    const onBack = () => {
        setActiveView(VIEWS.main);
    };
    let status = activeProject.participants.includes(user.id) ? STATUSES.participant : STATUSES.notMember;
    status = activeProject.admin === user.id ? STATUSES.admin : status;

    const onSetStatus = (event) => {
        event.stopPropagation();
        activeProject.participants.push(user.id);
        setActiveProject({ ...activeProject });
    };
    const isActive = status !== STATUSES.notMember;
    useEffect(() => () => setActiveProject(null), [setActiveProject]);

	return (
		<Panel id={VIEWS.projectDetailOnly}>
            <PanelHeaderSimple onBack={onBack}>Описание</PanelHeaderSimple>
            <Header>
                {activeProject.title}
            </Header>
            <Group>
                <Cell
                    size="l"
                    description={activeProject.shortDescription}
                    before={<Avatar src={activeProject.image} size={80} />}
                    bottomContent={isActive ? (
                        <Button level="commerce" disabled>{status === STATUSES.admin ? 'Вы администратор' : 'Вы участник'}</Button>
                     ) : (
                        <Button onClick={onSetStatus}>Присоединиться к проекту</Button>
                     )}
                >
                    {activeProject.title}
                </Cell>
            </Group>
            <Group>
                <Div>
                    {activeProject.description}
                </Div>
            </Group>
            <Group title="Документация">
                <List>
                    <Cell before={<Icon24Document />} onClick={() => {}}>Основные требования</Cell>
                    <Cell before={<Icon24Info />} onClick={() => {}}>Для справки</Cell>
                </List>
            </Group>
		</Panel>
	);
}

export default ProjectDetailOnly;

