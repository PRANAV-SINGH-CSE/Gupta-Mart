'use client';
import React, { Suspense } from 'react';
import AboutUs from '../../views/AboutUsPage';
import { PageSkeletonLoader } from '../../components/SkeletonLoader';

export default function AboutUsRoute() {
  return (
    <Suspense fallback={<PageSkeletonLoader />}>
      <AboutUs />
    </Suspense>
  );
}
