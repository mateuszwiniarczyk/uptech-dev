import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { notificationsReducer } from '@/components/Notifications/notificationsSlice';

import { authApiSlice } from '@/features/auth/authSlice';

const rootReducer = combineReducers({
  [authApiSlice.reducerPath]: authApiSlice.reducer,
  notifications: notificationsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
