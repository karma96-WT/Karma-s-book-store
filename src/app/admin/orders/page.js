'use client';

import { useEffect, useState } from 'react';
import './local.css';

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  var sum=0;

  const fetchOrders = async () => {
    const res = await fetch("/api/order");
    const data = await res.json();
    setOrders(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) return <p style={{ textAlign: 'center' }}>Loading…</p>;

  return (
    <div className="orders-container">
      <h2 className="heading">All Orders</h2>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li
              key={order.id}
              className="bg-white p-4 rounded shadow-sm border "
            >
              <div className="mb-2">
                <strong>{order.name}</strong> 
              </div>
              <div className='mb-2'>
                <strong>Gmail:</strong> {order.email}  
              </div>
              <div className='mb-2'>
                <strong>Phone no: </strong>{order.phone}
              </div>
              <div className="text-sm mb-2">
                <strong>Address:</strong> {order.country}, {order.city}, {order.street}, {order.zip}
              </div>
              <div className="text-sm mb-2">
                Ordered Books:{" "}
                <pre className="whitespace-pre-wrap break-words bg-gray-100 p-2 rounded mb-2">
                    {JSON.parse(order.cart)                                       // string → array
                        .map(b => `${b.name} by ${b.author} — Nu: ${(b.priceUSD).toFixed(2)}`)
                        .join('\n')} 
                    </pre>
                    <pre className="whitespace-pre-wrap break-words bg-gray-100 p-2 rounded mb-2 total">
                      Total Nu.{" "}
                      {JSON.parse(order.cart)
                        .reduce((sum, b) => sum + parseInt(b.priceUSD), 0)}
                    </pre>
              </div>
              <div className="text-xs text-gray-500 mb-2">
                Ordered on: {new Date(order.createdAt).toLocaleString()}
              </div>
              <label className='delivered mb-2'>
                <input type='checkbox' className='delivered'/>
                  Delivered
              </label>
              </li>
          ))}
          
        </ul>
      )}
    </div>
  );
}
