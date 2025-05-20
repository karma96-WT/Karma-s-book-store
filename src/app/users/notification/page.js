'use client'; // if using App Router

import { useEffect, useState } from 'react';
import './local.css';

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function fetchNotifications() {
      try {
        const res = await fetch('/api/notification');
        const data = await res.json();
        setNotifications(data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    }

    fetchNotifications();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      {notifications.length === 0 ? (
        <p>No notifications found.</p>
      ) : (
        <ul className="space-y-2">
          {notifications.map((notification) => (
            <li key={notification.id} className="bg-gray-100 p-3 rounded shadow">
              <p>{notification.message}</p>
              <span className="text-sm text-gray-500">
                {new Date(notification.createdAt).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
