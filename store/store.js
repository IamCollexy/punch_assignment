import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './slices/userSlice';
import isAuthReducer from './slices/isAuthSlice';

const reducers = combineReducers({
  user: userReducer,
  isAuth: isAuthReducer,
});
const persistConfig = {
  key: 'root',
  storage,
  version: 1,
  whitelist: ['isAuth', 'user'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export const persistor = persistStore(store);
setupListeners(store.dispatch);

export default store;
