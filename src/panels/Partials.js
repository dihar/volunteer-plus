import React from 'react';
import { usePlatform, IOS } from '@vkontakte/vkui'
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import CellButton from '@vkontakte/vkui/dist/components/CellButton/CellButton';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import List from '@vkontakte/vkui/dist/components/List/List';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import '@vkontakte/vkui/dist/vkui.css';
import { VIEWS } from '../constants';
import { useStore } from '../stores/app-store';

const Partials = () => {
    const { setActiveView } = useStore();
    const platform = usePlatform();
    const onBack = () => {
        setActiveView(VIEWS.project);
    };

	return (
		<Panel id={VIEWS.partials}>
            <PanelHeader
                theme="light"
                left={<HeaderButton onClick={onBack}>{platform === IOS ? <Icon28ChevronBack /> : <Icon24Back />}</HeaderButton>}
                addon={<HeaderButton onClick={onBack}>Назад</HeaderButton>}
            >
                Учавствуют в мероприятии
            </PanelHeader>
            <Group>
				<CellButton>Добавить нового участника</CellButton>
			</Group>
            <Group>
                <List>
                    <Cell
                        expandable
                        description="Люблю помогать старикам"
                        before={<Avatar src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" size={80} />}
                    >
                        Харин Дмитрий
                    </Cell>
                    <Cell
                        expandable
                        description="Больше всего нравится уборка"
                        before={<Avatar src="https://sun9-30.userapi.com/c845017/v845017447/1773bb/Wyfyi8-7e5A.jpg?ava=1" size={80} />}
                    >
                        Петрова Ирина
                    </Cell>
                    <Cell
                        expandable
                        description="Готов встретить гостей"
                        before={<Avatar src="https://sun9-25.userapi.com/c849432/v849432217/18ad61/0UFtoEhCsgA.jpg?ava=1" size={80} />}
                    >
                        Хромов Алексей
                    </Cell>
                </List>
            </Group>
		</Panel>
	);
}

export default Partials;

