import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import UsersStack from '@vkontakte/vkui/dist/components/UsersStack/UsersStack';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Checkbox from '@vkontakte/vkui/dist/components/Checkbox/Checkbox';
import PanelHeaderSimple from '../components/PanelHeaderSimple';
import '@vkontakte/vkui/dist/vkui.css';
import { VIEWS } from '../constants';
import { useStore } from '../stores/app-store';

const CheckList = () => {
    const { setActiveView } = useStore();
    const onBack = () => {
        setActiveView(VIEWS.project);
    };

	return (
		<Panel id={VIEWS.checkList}>
            <PanelHeaderSimple onBack={onBack}>Список заданий</PanelHeaderSimple>
            <Group>
                <Cell
                    size="m"
                    description="Северная сторона парка"
                    before={<Checkbox />}
                >
                    Посадить 2 берёзы
                </Cell>
                <Cell>
                    <UsersStack
                        photos={[
                            'https://sun9-19.userapi.com/c851232/v851232757/fb949/4rDdDHqGglQ.jpg?ava=1',
                        ]}
                    >Ответственный Николай Журавлёв</UsersStack>
                </Cell>
            </Group>
            <Group>
                <Cell
                    size="m"
                    description="Северная сторона парка"
                    before={<Checkbox />}
                >
                    Посадить 2 берёзы
                </Cell>
                <Cell>
                    <UsersStack
                        photos={[
                            'https://sun9-19.userapi.com/c851232/v851232757/fb949/4rDdDHqGglQ.jpg?ava=1',
                        ]}
                    >Ответственный Николай Журавлёв</UsersStack>
                </Cell>
            </Group>
            <Group>
                <Cell
                    size="m"
                    description="Северная сторона парка"
                    before={<Checkbox />}
                >
                    Посадить 2 берёзы
                </Cell>
                <Cell>
                    <UsersStack
                        photos={[
                            'https://sun9-19.userapi.com/c851232/v851232757/fb949/4rDdDHqGglQ.jpg?ava=1',
                        ]}
                    >Ответственный Николай Журавлёв</UsersStack>
                </Cell>
            </Group>
            <Group>
                <Cell
                    size="m"
                    description="Северная сторона парка"
                    before={<Checkbox />}
                >
                    Посадить 2 берёзы
                </Cell>
                <Cell>
                    <UsersStack
                        photos={[
                            'https://sun9-19.userapi.com/c851232/v851232757/fb949/4rDdDHqGglQ.jpg?ava=1',
                        ]}
                    >Ответственный Николай Журавлёв</UsersStack>
                </Cell>
            </Group>
            <Group>
                <Cell
                    size="m"
                    description="Северная сторона парка"
                    before={<Checkbox />}
                >
                    Посадить 2 берёзы
                </Cell>
                <Cell>
                    <UsersStack
                        photos={[
                            'https://sun9-19.userapi.com/c851232/v851232757/fb949/4rDdDHqGglQ.jpg?ava=1',
                        ]}
                    >Ответственный Николай Журавлёв</UsersStack>
                </Cell>
            </Group>
            <Group>
                <Cell
                    size="m"
                    description="Северная сторона парка"
                    before={<Checkbox />}
                >
                    Посадить 2 берёзы
                </Cell>
                <Cell>
                    <UsersStack
                        photos={[
                            'https://sun9-19.userapi.com/c851232/v851232757/fb949/4rDdDHqGglQ.jpg?ava=1',
                        ]}
                    >Ответственный Николай Журавлёв</UsersStack>
                </Cell>
            </Group>
		</Panel>
	);
}

export default CheckList;

