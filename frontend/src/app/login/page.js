'use client';
import React, { Suspense } from 'react';
import LoginPage from '../../views/LoginPage';
import { PageSkeletonLoader } from '../../components/SkeletonLoader';

export default function LoginRoute() {
  return (
    <Suspense fallback={<PageSkeletonLoader />}>
      <LoginPage />
    </Suspense>
  );
}
