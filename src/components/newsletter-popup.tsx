'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface NewsletterPopupProps {
  delay?: number; // Delay before showing popup in ms
}

export const NewsletterPopup = ({ delay = 3000 }: NewsletterPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect((): (() => void) | undefined => {
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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 xs:p-4 sm:p-6 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-xl xs:rounded-2xl shadow-2xl w-full max-w-sm animate-in fade-in zoom-in duration-300 overflow-hidden relative">
        {/* Close Button - Highly Visible */}
        <button
          onClick={handleClose}
          className="absolute top-3 xs:top-4 right-3 xs:right-4 z-10 p-2 hover:bg-slate-100 active:bg-slate-200 rounded-full transition-all duration-200 group"
          aria-label="Close newsletter popup"
        >
          <X className="w-6 h-6 xs:w-7 xs:h-7 text-slate-600 group-hover:text-slate-900 transition-colors" />
          {/* Background circle for better visibility */}
          <div className="absolute inset-0 bg-white/80 rounded-full -z-10"></div>
        </button>

        {/* Content Container */}
        <div className="p-5 xs:p-6 sm:p-8 md:p-10">
          {/* Header */}
          <div className="mb-5 xs:mb-6 sm:mb-8 pr-8">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-primary mb-2 xs:mb-3">
              BZION Newsletter
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              Subscribe for exclusive updates, market insights, and special offers for your business!
            </p>
          </div>

          {!isSubmitted ? (
            <>
              {/* Featured Image */}
              <div className="mb-6 xs:mb-7 sm:mb-8 rounded-lg xs:rounded-xl overflow-hidden shadow-md">
                <Image
                  src="https://i.ibb.co/zYxQkP9/products.jpg"
                  alt="BZION Products"
                  width={400}
                  height={240}
                  className="w-full h-36 xs:h-40 sm:h-48 object-cover"
                  priority
                />
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3 xs:space-y-4 mb-5 xs:mb-6">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your E-mail Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 xs:px-5 py-2.5 xs:py-3 sm:py-4 bg-slate-100 rounded-full text-xs xs:text-sm sm:text-base placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:bg-white transition-all"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="absolute right-1.5 xs:right-2 top-1/2 -translate-y-1/2 bg-secondary hover:bg-secondary/90 disabled:opacity-50 text-white p-1.5 xs:p-2 rounded-full transition-all"
                    aria-label="Subscribe to newsletter"
                  >
                    <svg
                      className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6"
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
                  className="w-full bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold py-2.5 xs:py-3 sm:py-3 text-sm xs:text-base rounded-full transition-all disabled:opacity-50"
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
            <div className="text-center py-6 xs:py-8 sm:py-10 pr-8">
              <div className="mb-4 xs:mb-5 flex justify-center">
                <div className="w-12 xs:w-14 sm:w-16 h-12 xs:h-14 sm:h-16 bg-green-100 rounded-full flex items-center justify-center animate-bounce">
                  <svg
                    className="w-6 xs:w-7 sm:w-8 h-6 xs:h-7 sm:h-8 text-green-600"
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
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-primary mb-2 xs:mb-3">
                Success!
              </h3>
              <p className="text-sm xs:text-base text-slate-600 leading-relaxed">
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
