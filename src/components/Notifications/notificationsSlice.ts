import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

import { Notification } from '@/components/Notifications/Notification';

export type NotificationsState = Notification[];

const initialState: NotificationsState = [];

export const notificationssSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (
      state,
      {
        payload: { title, type, message },
      }: PayloadAction<Omit<Notification, 'id'>>
    ) => {
      state.push({
        id: nanoid(),
        title,
        message,
        type,
      });
    },
    dismissNotification: (state, action: PayloadAction<string>) => {
      return state.filter((notifcation) => notifcation.id !== action.payload);
    },
  },
  extraReducers: {},
});

export const {
  actions: { dismissNotification, addNotification },
  reducer: notificationsReducer,
} = notificationssSlice;
