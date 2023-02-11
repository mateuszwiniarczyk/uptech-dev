import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { authApiSlice } from '@/store/authSlice';

const rootReducer = combineReducers({
  [authApiSlice.reducerPath]: authApiSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
