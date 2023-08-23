import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './reducers/themeReducer';
import searchReducer from './reducers/searchReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedThemeReducer = persistReducer(persistConfig, themeReducer);
const persistedSearchReducer = persistReducer(persistConfig, searchReducer);

export const store = configureStore({
    reducer: {
        theme: persistedThemeReducer,
        search: persistedSearchReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);
