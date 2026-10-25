'use client';
import React, { Suspense } from 'react';
import TermsOfService from '../../views/TermsOfService';
import { PageSkeletonLoader } from '../../components/SkeletonLoader';

export default function TermsOfServiceRoute() {
  return (
    <Suspense fallback={<PageSkeletonLoader />}>
      <TermsOfService />
    </Suspense>
  );
}
