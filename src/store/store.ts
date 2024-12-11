import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Root Reducer and Root Saga placeholders
import rootReducer from './root/rootReducer'; // Combine all reducers here
import rootSaga from './root/rootSaga'; // Combine all sagas here

// Persist Configuration
const persistConfig = {
    key: 'root',
    storage,
    whitelist: [], // Add reducer keys to persist, e.g., ['auth']
};

// Create Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store Configuration
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: false, // Disable Thunk as we're using Saga
            serializableCheck: false, // Disable Serializable checks for Redux Persist
        }).concat(sagaMiddleware),
});

// Run Saga Middleware
sagaMiddleware.run(rootSaga);

// Persistor
const persistor = persistStore(store);

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Exports
export { store, persistor };
