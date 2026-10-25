'use client';
import React, { Suspense } from 'react';
import OrdersPage from '../../views/OrdersPage';
import { PageSkeletonLoader } from '../../components/SkeletonLoader';

export default function OrdersRoute() {
  return (
    <Suspense fallback={<PageSkeletonLoader />}>
      <OrdersPage />
    </Suspense>
  );
}
