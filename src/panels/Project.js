import React from 'react';
import { usePlatform, IOS } from '@vkontakte/vkui'
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import '@vkontakte/vkui/dist/vkui.css';
import { VIEWS } from '../constants';
import { useStore } from '../stores/app-store';


const Project = () => {
    const { setActiveView } = useStore();
    const platform = usePlatform();
    const onBack = () => {
        setActiveView(VIEWS.main);
    };

	return (
		<Panel id={VIEWS.project}>
            <PanelHeader
                theme="light"
                left={<HeaderButton onClick={onBack}>{platform === IOS ? <Icon28ChevronBack /> : <Icon24Back />}</HeaderButton>}
                addon={<HeaderButton onClick={onBack}>Назад</HeaderButton>}
            >
                Проект
            </PanelHeader>
            <Group>
                <Cell
                    size="l"
                    description="Посадить 20 берёз в Коломенском парке"
                    before={<Avatar src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" size={80} />}
                    bottomContent={<Button>Присоединиться к проекту</Button>}
                >
                    Проект посадки деревьев
                </Cell>
            </Group>
            <Group>
                <Div>
                    Социальный проект для оброгораживания территории в районе парка Коломенское. Сделаем наш парк Лучше!
                </Div>
            </Group>
		</Panel>
	);
}

export default Project;

