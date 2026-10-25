'use client';
import NextLink from 'next/link';
import { useRouter, useSearchParams as useNextSearchParams, usePathname } from 'next/navigation';
import React from 'react';

/**
 * Universal Link component supporting both `href` (Next.js) and `to` (React Router)
 */
export function Link({ to, href, children, ...props }) {
  const destination = href || to || '/';
  return (
    <NextLink href={destination} {...props}>
      {children}
    </NextLink>
  );
}

export default Link;

/**
 * Universal useNavigate hook compatible with React Router syntax
 */
export function useNavigate() {
  const router = useRouter();
  return (path, options = {}) => {
    if (typeof path === 'number') {
      if (path === -1) router.back();
      return;
    }
    if (options?.replace) {
      router.replace(path);
    } else {
      router.push(path);
    }
  };
}

/**
 * Universal useLocation hook
 */
export function useLocation() {
  const pathname = usePathname();
  const searchParams = useNextSearchParams();
  const search = searchParams ? `?${searchParams.toString()}` : '';
  return {
    pathname,
    search,
  };
}

/**
 * Universal useSearchParams hook
 */
export function useSearchParams() {
  const searchParams = useNextSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const setSearchParams = (newParams) => {
    const params = new URLSearchParams(newParams);
    router.push(`${pathname}?${params.toString()}`);
  };

  return [searchParams, setSearchParams];
}
