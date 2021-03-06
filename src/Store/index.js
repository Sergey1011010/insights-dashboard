import { notifications, notificationsMiddleware } from '@redhat-cloud-services/frontend-components-notifications';

import { DashboardStore } from '../AppReducer';
import { compose } from 'redux';
import { getRegistry } from '@red-hat-insights/insights-frontend-components';
import promise from 'redux-promise-middleware';

let registry;

export const init = (...middleware) => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    registry = getRegistry(
        {},
        [...middleware, promise, notificationsMiddleware({ errorDescriptionKey: 'response.data' })],
        composeEnhancers
    );
    registry.register({ DashboardStore });
    registry.register({ notifications });

    return registry;
};

export const getStore = () => registry.getStore();

export const register = (...args) => registry.register(...args);

