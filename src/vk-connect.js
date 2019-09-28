import connect from '@vkontakte/vk-connect';
import connectMock from '@vkontakte/vkui-connect-mock';

const isMock = false;

let extendedConnect = connect;
const eventsHeap = {};

const subscriber = (eventData) => {
    const { detail } = eventData;
    const { type, data } = detail;

    if (type && type.endsWith('Result')) {
        const method = type.replace(/Result$/, '');

        if (eventsHeap[method]) {
            eventsHeap[method](data);
            eventsHeap[method] = undefined;
        }
    }
};

if (isMock) {
    extendedConnect = {
        ...connectMock,
        sendPromise: function(method, params) {
            return new Promise((resolve) => {
                eventsHeap[method] = resolve;
                extendedConnect.send(method, params);
            });
        }
    }

    extendedConnect.subscribe(subscriber);
} else {
    extendedConnect = connect;
}

export default extendedConnect;
