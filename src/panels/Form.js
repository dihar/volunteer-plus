import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout';
import Input from '@vkontakte/vkui/dist/components/Input/Input';
import '@vkontakte/vkui/dist/vkui.css';
import PanelHeaderSimple from '../components/PanelHeaderSimple';
import { VIEWS } from '../constants';
import { useStore } from '../stores/app-store';

const Form = () => {
    const { setActiveView, setAlert} = useStore();
    const onBack = () => {
        setActiveView(VIEWS.main);
    };
    const onSend = () => {
        setAlert('Новое мероприятие создано');
        onBack();
    };

	return (
		<Panel id={VIEWS.form}>
            <PanelHeaderSimple onBack={onBack}>Создание мероприятия</PanelHeaderSimple>
            <FormLayout>
                <Input
                    type="text"
                    top="Название"
                    name="title"
                />
                <Input
                    type="text"
                    top="Короткое описание"
                    name="short"
                />
                <Input
                    type="text"
                    top="Полное описание"
                    name="short"
                />
                <Button onClick={onSend} size="xl">Создать</Button>
            </FormLayout>
		</Panel>
	);
}

export default Form;
