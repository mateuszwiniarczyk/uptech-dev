import { useNotification } from '@/hooks/useNotification';

import { Notification } from '@/components/Notifications/Notification';

export const Notifications = () => {
  const { notifications } = useNotification();

  return (
    <div
      aria-live='assertive'
      className='pointer-events-none fixed inset-0 z-50 flex flex-col items-end space-y-4 px-4 py-24'
    >
      {notifications.map((notification) => (
        <Notification key={notification.id} notification={notification} />
      ))}
    </div>
  );
};
