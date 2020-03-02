import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createRootReducer from './rootReducer';

const persistConfig = {
  blacklist: ['router'],
  key: 'root',
  storage,
}

export default (history: History<any>) => {
  const rootReducer = createRootReducer(history);
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const middleware = [
    routerMiddleware(history),
    ...getDefaultMiddleware({
      serializableCheck: {
        // Ignore actions for "react-persist"
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }),
  ];

  const store = configureStore({
    reducer: persistedReducer,
    middleware,
  });

  let persistor = persistStore(store);

  return { store, persistor };
}
