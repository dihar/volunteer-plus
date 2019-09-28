import React from 'react';
import { usePlatform, IOS } from '@vkontakte/vkui'
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import List from '@vkontakte/vkui/dist/components/List/List';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Document from '@vkontakte/icons/dist/24/document';
import Icon24Info from '@vkontakte/icons/dist/24/info';
import '@vkontakte/vkui/dist/vkui.css';
import { VIEWS } from '../constants';
import { useStore } from '../stores/app-store';

const ProjectDetail = () => {
    const { setActiveView } = useStore();
    const platform = usePlatform();
    const onBack = () => {
        setActiveView(VIEWS.project);
    };

	return (
		<Panel id={VIEWS.projectDetail}>
            <PanelHeader
                theme="light"
                left={<HeaderButton onClick={onBack}>{platform === IOS ? <Icon28ChevronBack /> : <Icon24Back />}</HeaderButton>}
                addon={<HeaderButton onClick={onBack}>Назад</HeaderButton>}
            >
                Описание
            </PanelHeader>
            <Header>
                Проект посадки деревьев
            </Header>
            <Group>
                <Cell
                    size="l"
                    description="Посадить 20 берёз в Коломенском парке"
                    before={<Avatar src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" size={80} />}
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

export default ProjectDetail;

