import initStore from 'lemon-state';
import { TABS, VIEWS } from '../constants';

export const { store, useStore } =  initStore({
    activeTab: TABS.catalog,
    activeView: VIEWS.main,
    alert: null,
    user: {}
}, {
    setActiveTab: (_, payload) => ({
        activeTab: payload
    }),
    setActiveView: (_, payload) => ({
        activeView: payload
    }),
    setAlert: ({ setState }, payload) => {
        setTimeout(() => setState({ alert: null }), 3000);
        return { alert: payload };
    },
    setUser: (_, payload) => ({ user: payload })
}, {
    debug: true
});
