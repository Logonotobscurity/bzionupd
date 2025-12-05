'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface NewsletterPopupProps {
  delay?: number; // Delay before showing popup in ms
}

export const NewsletterPopup = ({ delay = 3000 }: NewsletterPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed this popup
    const hasDismissed = localStorage.getItem('bzion-newsletter-dismissed');
    if (!hasDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [delay]);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('bzion-newsletter-dismissed', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      // Replace with your actual newsletter API endpoint
      const response = await fetch('/api/newsletter-subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          handleClose();
        }, 2000);
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-1 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Close newsletter popup"
        >
          <X className="w-6 h-6 text-slate-500" />
        </button>

        {/* Content Container */}
        <div className="p-8 sm:p-10">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">
              BZION Newsletter
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-medium">
              Subscribe for exclusive updates, market insights, and special offers for your business!
            </p>
          </div>

          {!isSubmitted ? (
            <>
              {/* Featured Image */}
              <div className="mb-8 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="https://i.ibb.co/zYxQkP9/products.jpg"
                  alt="BZION Products"
                  width={400}
                  height={240}
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your E-mail Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-5 py-3 sm:py-4 bg-slate-100 rounded-full text-sm sm:text-base placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:bg-white transition-all"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-secondary hover:bg-secondary/90 disabled:opacity-50 text-white p-2 rounded-full transition-all"
                    aria-label="Subscribe to newsletter"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                    </svg>
                  </button>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading || !email}
                  className="w-full bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold py-3 rounded-full transition-all disabled:opacity-50"
                >
                  {isLoading ? 'Subscribing...' : 'Subscribe now'}
                </Button>
              </form>

              {/* Disclaimer Text */}
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed text-center">
                By subscribing, you agree to receive curated updates about BZION's products, services, and promotions. 
                Your email will be used only for BZION communications. You can unsubscribe at any time via the link in our emails. 
                We respect your privacy and will never share your information with third parties.
              </p>
            </>
          ) : (
            /* Success Message */
            <div className="text-center py-8">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                Success!
              </h3>
              <p className="text-slate-600">
                Thank you for subscribing to BZION Newsletter. Check your email for confirmation!
              </p>
            </div>
          )}
        </div>

        {/* Footer Accent Bar */}
        <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
      </div>
    </div>
  );
};

export default NewsletterPopup;
