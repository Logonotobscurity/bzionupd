
'use client';

import { useEffect, useState } from 'react';
import OrderDashboard from '@/components/order-dashboard';

export default function DashboardPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // TODO: Fetch orders from the API
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Order Dashboard</h1>
      <OrderDashboard />
    </div>
  );
}
