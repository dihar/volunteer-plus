import React, { useState } from 'react';
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
    const { setActiveView } = useStore();
    const onBack = () => {
        setActiveView(VIEWS.main);
    };
    const [status, setStatus] = useState(STATUSES.noTMember);
    const onSetStatus = (event) => {
        event.stopPropagation();
        setStatus(STATUSES.participant);
    };
    const isActive = status !== STATUSES.noTMember;

	return (
		<Panel id={VIEWS.projectDetailOnly}>
            <PanelHeaderSimple onBack={onBack}>Описание</PanelHeaderSimple>
            <Header>
                Проект посадки деревьев
            </Header>
            <Group>
                <Cell
                    size="l"
                    description="Посадить 20 берёз в Коломенском парке"
                    before={<Avatar src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" size={80} />}
                    bottomContent={isActive ? (
                        <Button level="commerce" disabled>{status === STATUSES.admin ? 'Вы администратор' : 'Вы участник'}</Button>
                     ) : (
                        <Button onClick={onSetStatus}>Присоединиться к проекту</Button>
                     )}
                >
                    Проект посадки деревьев
                </Cell>
            </Group>
            <Group>
                <Div>
                    Социальный проект для облагораживания территории в районе парка Коломенское. Очень важно успеть в течение недели. Сделаем наш парк Лучше!
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

