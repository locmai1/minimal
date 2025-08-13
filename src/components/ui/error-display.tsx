'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ErrorDisplayProps } from '@/src/types';

export default function ErrorDisplay({
  title,
  message,
  actionText = 'Go Home',
  onAction,
  autoRedirect = false,
  redirectDelay = 5,
  redirectPath = '/',
}: ErrorDisplayProps) {
  const router = useRouter();
  const [countdown, setCountdown] = useState(redirectDelay);

  useEffect(() => {
    if (!autoRedirect) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          router.push(redirectPath);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [autoRedirect, redirectPath, router]);

  const handleAction = () => {
    if (onAction) {
      onAction();
    } else {
      router.push(redirectPath);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center min-h-[50vh]">
      <h2 className="text-xl font-medium text-red-600 mb-2">{title}</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{message}</p>

      {autoRedirect && (
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
          Redirecting to homepage in {countdown} seconds...
        </p>
      )}

      <button
        onClick={handleAction}
        className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        {actionText}
      </button>
    </div>
  );
}
