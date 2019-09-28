import initStore from 'lemon-state';
import { TABS, VIEWS } from '../constants';

export const { store, useStore } =  initStore({
    activeTab: TABS.catalog,
    activeView: VIEWS.main
}, {
    setActiveTab: (_, payload) => ({
        activeTab: payload
    }),
    setActiveView: (_, payload) => ({
        activeView: payload
    })
}, {
    debug: true
});
