import initStore from 'lemon-state';
import data from './data.json';
import { TABS, VIEWS } from '../constants';

export const { store, useStore } =  initStore({
    activeTab: TABS.catalog,
    activeView: VIEWS.main,
    alert: null,
    user: {},
    projects: data.projects,
    users: data.participants,
    activeProject: null
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
    setUser: (_, payload) => ({ user: payload }),
    setActiveProject: (_, payload) => ({ activeProject: payload })
}, {
    debug: true
});
