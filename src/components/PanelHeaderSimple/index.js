import React from 'react';
import { usePlatform, IOS } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';

const PanelHeaderSimple = ({ children, onBack }) => {
    const platform = usePlatform();
    return (
        <PanelHeader
            theme="light"
            left={<HeaderButton onClick={onBack}>{platform === IOS ? <Icon28ChevronBack /> : <Icon24Back />}</HeaderButton>}
            addon={<HeaderButton onClick={onBack}>Назад</HeaderButton>}
        >
            {children}
        </PanelHeader>
    );
};

export default PanelHeaderSimple;
