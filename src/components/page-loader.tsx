'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface PageLoaderProps {
  isLoading?: boolean;
  fullScreen?: boolean;
  message?: string;
}

export const PageLoader = ({
  isLoading = true,
  fullScreen = true,
  message = 'Loading...'
}: PageLoaderProps) => {
  if (!isLoading) return null;

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center bg-white z-50',
        fullScreen
          ? 'fixed inset-0'
          : 'relative w-full h-96'
      )}
    >
      {/* Animated SVG Spinner with Logo */}
      <div className="relative flex items-center justify-center">
        {/* Animated spinner circle */}
        <svg
          className="absolute animate-spin-loader"
          viewBox="25 25 50 50"
          width="120"
          height="120"
        >
          <circle
            r="20"
            cy="50"
            cx="50"
            className="stroke-primary"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            style={{
              strokeDasharray: '1, 200',
              strokeDashoffset: 0,
              animation: 'dash4 1.5s ease-in-out infinite'
            }}
          />
        </svg>

        {/* BZION Logo in center */}
        <div className="relative w-20 h-20 flex items-center justify-center">
          <Image
            src="/favicon.svg"
            alt="BZION"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
      </div>

      {/* Loading message */}
      {message && (
        <div className="mt-8 text-center">
          <p className="text-lg font-semibold text-foreground mb-2">{message}</p>
          <div className="flex justify-center gap-1">
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes rotate4 {
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes dash4 {
          0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
          }

          50% {
            stroke-dasharray: 90, 200;
            stroke-dashoffset: -35px;
          }

          100% {
            stroke-dashoffset: -125px;
          }
        }

        .animate-spin-loader {
          width: 3.25em;
          transform-origin: center;
          animation: rotate4 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PageLoader;
