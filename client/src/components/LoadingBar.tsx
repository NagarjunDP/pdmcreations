'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function LoadingBar() {
  const pathname = usePathname();

  useEffect(() => {
    // Show loading bar
    document.body.classList.add('loading');

    // Hide after 400ms (feels natural)
    const timer = setTimeout(() => {
      document.body.classList.remove('loading');
    }, 400);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}