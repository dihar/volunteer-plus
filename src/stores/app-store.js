import initStore from 'lemon-state';
import { TABS } from '../constants';

export const { store, useStore } =  initStore({
    activeTab: TABS.catalog
}, {
    setActiveTab: (_, payload) => ({
        activeTab: payload
    })
});
