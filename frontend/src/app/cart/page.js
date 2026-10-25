'use client';
import React, { Suspense } from 'react';
import CartPage from '../../views/CartPage';
import { PageSkeletonLoader } from '../../components/SkeletonLoader';

export default function CartRoute() {
  return (
    <Suspense fallback={<PageSkeletonLoader />}>
      <CartPage />
    </Suspense>
  );
}
