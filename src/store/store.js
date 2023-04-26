import { init } from '@rematch/core';
import persistPlugin from '@rematch/persist';
import storage from 'redux-persist/lib/storage';
import createLoadingPlugin from '@rematch/loading';

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['auth']
};

const store = init({
    models: {},
    plugins: [persistPlugin(persistConfig), createLoadingPlugin()]
});

export default store;