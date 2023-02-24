import { Notification } from '@/components/Notifications/Notification';
import {
  addNotification,
  dismissNotification,
} from '@/components/Notifications/notificationsSlice';

import { useAppDispatch, useAppSelector } from '@/store/hooks';

export const useNotification = () => {
  const notifications = useAppSelector((state) => state.notifications);
  const dispatch = useAppDispatch();

  const createNotification = (notification: Omit<Notification, 'id'>) => {
    dispatch(addNotification(notification));
  };

  const removeNotification = (id: string) => {
    dispatch(dismissNotification(id));
  };

  return {
    createNotification,
    removeNotification,
    notifications,
  };
};
