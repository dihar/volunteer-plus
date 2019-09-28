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
    const { setActiveView, activeProject, setActiveProject } = useStore();
    const onBack = () => {
        setActiveView(VIEWS.project);
    };
    const toggleTask = (task) => () => {
        activeProject.tasks.forEach(taskI => {
            if (task.description === taskI.description && task.title === taskI.title) {
                taskI.complete = !taskI.complete;
            }
        });
        setActiveProject({ ...activeProject });
    };

	return (
		<Panel id={VIEWS.checkList}>
            <PanelHeaderSimple onBack={onBack}>Список заданий</PanelHeaderSimple>
            {activeProject.tasks.map(task => (
                <Group key={`${task.title}-${task.description}`}>
                    <Cell
                        size="m"
                        description={task.description}
                        before={<Checkbox onChange={toggleTask(task)} checked={task.complete} />}
                    >
                        {task.title}
                    </Cell>
                    <Cell>
                        <UsersStack
                            photos={[
                                'https://sun9-19.userapi.com/c851232/v851232757/fb949/4rDdDHqGglQ.jpg?ava=1',
                            ]}
                        >Ответственный Николай Журавлёв</UsersStack>
                    </Cell>
                </Group>
            ))}
		</Panel>
	);
}

export default CheckList;

