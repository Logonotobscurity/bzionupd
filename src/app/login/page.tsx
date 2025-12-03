'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { findImage } from '@/lib/placeholder-images';
import { useAuthStore } from '@/lib/auth-store';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Mail, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { initializeMockActivities } from '@/lib/activity-store';

const loginImage = findImage('login-bg');

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuthStore();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Demo credentials info
  const demoCredentials = [
    { email: 'demo@bzion.com', password: 'demo123', name: 'John Doe' },
    { email: 'test@bzion.com', password: 'test123', name: 'Jane Smith' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await login(email, password);
      // Initialize mock activities on successful login
      initializeMockActivities();
      
      toast({
        title: 'Login Successful',
        description: `Welcome back, ${email}!`,
      });
      router.push('/account');
    } catch (error) {
      toast({
        title: 'Login Failed',
        description: error instanceof Error ? error.message : 'Invalid credentials',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fillDemoCredentials = (demoEmail: string, demoPassword: string) => {
    setEmail(demoEmail);
    setPassword(demoPassword);
  };

  return (
    <div className="w-full lg:grid lg:min-h-[calc(100vh-10rem)] lg:grid-cols-2">
      {/* Left Side - Form */}
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 bg-gradient-to-br from-white via-white to-primary/5">
        <style jsx>{`
          .form {
            display: flex;
            flex-direction: column;
            gap: 10px;
            background: linear-gradient(45deg, hsl(var(--primary)), hsl(220.5 100% 8.8%));
            padding: 30px;
            width: 100%;
            max-width: 450px;
            border-radius: 20px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
            transition: background 0.3s ease;
            box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
            backdrop-filter: blur(4px);
          }

          .form:hover {
            background: linear-gradient(45deg, hsl(220.5 100% 8.8%), hsl(var(--primary)));
            box-shadow: 0 12px 40px rgba(31, 38, 135, 0.5);
          }

          ::placeholder {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          }

          .form button {
            align-self: flex-end;
          }

          .flex-column > label {
            color: white;
            font-weight: 600;
            font-size: 14px;
            letter-spacing: 0.5px;
          }

          .inputForm {
            border: 1.5px solid #ecedec;
            border-radius: 10em;
            height: 50px;
            display: flex;
            align-items: center;
            padding-left: 10px;
            transition: 0.2s ease-in-out;
            background-color: white;
          }

          .input {
            margin-left: 10px;
            border-radius: 10rem;
            border: none;
            width: 100%;
            height: 100%;
            font-size: 14px;
          }

          .input:focus {
            outline: none;
          }

          .inputForm:focus-within {
            border: 1.5px solid hsl(var(--secondary));
            box-shadow: 0 0 8px rgba(var(--secondary-rgb), 0.3);
          }

          .flex-row {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
            justify-content: space-between;
          }

          .flex-row > div > label {
            font-size: 14px;
            color: white;
            font-weight: 500;
          }

          .span {
            font-size: 14px;
            margin-left: 5px;
            color: white;
            font-weight: 500;
            cursor: pointer;
            transition: color 0.2s ease;
          }

          .span:hover {
            color: hsl(var(--secondary));
          }

          .button-submit {
            position: relative;
            display: inline-block;
            padding: 15px 30px;
            text-align: center;
            letter-spacing: 1px;
            text-decoration: none;
            background: transparent;
            transition: ease-out 0.5s;
            border: 2px solid hsl(var(--secondary));
            border-radius: 10em;
            box-shadow: inset 0 0 0 0 hsl(var(--secondary));
            margin: 20px 0 10px 0;
            color: white;
            font-size: 15px;
            font-weight: 500;
            height: 50px;
            width: 100%;
            cursor: pointer;
          }

          .button-submit:hover {
            color: white;
            box-shadow: inset 0 -100px 0 0 hsl(var(--secondary));
          }

          .button-submit:active {
            transform: scale(0.9);
          }

          .p {
            text-align: center;
            color: white;
            font-size: 14px;
            margin: 5px 0;
          }

          .btn {
            margin-top: 10px;
            width: 100%;
            height: 50px;
            border-radius: 10em;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 500;
            gap: 10px;
            border: 1px solid #ededef;
            background-color: white;
            cursor: pointer;
            transition: 0.2s ease-in-out;
            font-size: 15px;
          }

          .btn:hover {
            border: 1px solid hsl(var(--secondary));
            background-color: #fafafa;
          }

          .demo-btn {
            margin-top: 10px;
            width: 100%;
            height: 50px;
            border-radius: 10em;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 500;
            gap: 10px;
            border: 2px dashed hsl(var(--secondary) / 0.6);
            background-color: transparent;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            font-size: 14px;
            color: white;
          }

          .demo-btn:hover {
            border: 2px dashed hsl(var(--secondary));
            background-color: hsl(var(--secondary) / 0.1);
          }

          .password-toggle {
            background: none;
            border: none;
            cursor: pointer;
            padding: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            transition: color 0.2s ease;
          }

          .password-toggle:hover {
            color: hsl(var(--secondary));
          }

          .header-container {
            gap: 0;
            margin-bottom: 20px;
            text-align: center;
          }

          .icon-box {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            background: linear-gradient(135deg, hsl(var(--secondary)), hsl(var(--secondary) / 0.8));
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 15px;
          }

          .title {
            font-size: 28px;
            font-weight: bold;
            color: white;
            margin: 0 0 8px 0;
          }

          .subtitle {
            font-size: 14px;
            color: rgba(255, 255, 255, 0.8);
            margin: 0;
          }

          .form-section {
            gap: 15px;
          }

          .password-input-wrapper {
            padding-right: 10px;
          }

          .button-content {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .divider-container {
            display: flex;
            align-items: center;
            gap: 10px;
            margin: 15px 0 10px 0;
            opacity: 0.6;
          }

          .divider-line {
            flex: 1;
            height: 1px;
            background: rgba(255, 255, 255, 0.2);
          }

          .divider-text {
            margin: 0;
          }

          .demo-credentials {
            gap: 8px;
            display: flex;
            flex-direction: column;
            margin: 0;
          }

          .demo-cred-name {
            font-size: 14px;
            font-weight: 600;
          }

          .footer-section {
            margin-top: 15px;
            gap: 8px;
            display: flex;
            flex-direction: column;
          }

          .footer-text-small {
            font-size: 12px;
          }

          .footer-text-large {
            font-size: 13px;
          }

          .link-inline {
            margin: 0;
          }

          .pulse-element {
            animation-delay: 1s;
          }
        `}</style>

        <div className="form">
          {/* Header */}
          <div className="flex-column">
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div className="icon-box">
                <Lock style={{ width: '24px', height: '24px', color: 'white' }} />
              </div>
              <h1 className="title">Welcome Back</h1>
              <p className="subtitle">Sign in to your BZION account</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex-column form-section">
            {/* Email Field */}
            <div className="flex-column">
              <label htmlFor="email">Email Address</label>
              <div className="inputForm">
                <Mail style={{ width: '18px', height: '18px', color: 'hsl(var(--secondary))', flexShrink: 0 }} />
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex-column">
              <div className="flex-row">
                <label htmlFor="password">Password</label>
                <Link href="#" className="span">
                  Forgot?
                </Link>
              </div>
              <div className="inputForm password-input-wrapper">
                <Lock style={{ width: '18px', height: '18px', color: 'hsl(var(--secondary))', flexShrink: 0 }} />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle"
                >
                  {showPassword ? (
                    <EyeOff style={{ width: '18px', height: '18px' }} />
                  ) : (
                    <Eye style={{ width: '18px', height: '18px' }} />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="button-submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Loader2 style={{ width: '16px', height: '16px', animation: 'spin 1s linear infinite' }} />
                  Signing in...
                </span>
              ) : (
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Sign In
                  <ArrowRight style={{ width: '16px', height: '16px' }} />
                </span>
              )}
            </button>

            {/* Google Button */}
            <button type="button" className="btn" disabled>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 c0-3.331,2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.461,2.268,15.365,0.903,12.545,0.903 c-6.256,0-11.321,5.064-11.321,11.322c0,6.258,5.065,11.322,11.321,11.322c6.256,0,11.322-5.064,11.322-11.322 c0-0.755-0.084-1.491-0.239-2.220H12.545z" />
              </svg>
              Continue with Google
            </button>
          </form>

          {/* Divider */}
          <div className="divider-container">
            <div className="divider-line"></div>
            <span className="p divider-text">Demo Accounts</span>
            <div className="divider-line"></div>
          </div>

          {/* Demo Credentials */}
          <div className="demo-credentials">
            {demoCredentials.map((cred) => (
              <button
                key={cred.email}
                type="button"
                onClick={() => fillDemoCredentials(cred.email, cred.password)}
                className="demo-btn"
              >
                <span className="demo-cred-name">{cred.name}</span>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="footer-section">
            <p className="p footer-text-small">
              By signing in, you agree to our <span className="span link-inline">Terms</span> and <span className="span link-inline">Privacy</span>
            </p>
            <p className="p footer-text-large">
              Don't have an account? <Link href="/contact" className="span" style={{ margin: '0', fontWeight: '600' }}>Contact us</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Hero */}
      <div className="hidden bg-muted lg:block relative overflow-hidden">
        {/* Gradient Overlay Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse pulse-element"></div>

        {/* Background Image */}
        {loginImage && (
          <Image
            src={loginImage.imageUrl}
            alt={loginImage.description}
            data-ai-hint={loginImage.imageHint}
            fill
            className="object-cover opacity-20"
          />
        )}

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-8 sm:p-12">
          {/* Top Brand */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
              <span className="text-xs sm:text-sm font-semibold text-white">Secure B2B Marketplace</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Trusted by<br />Procurement Leaders
              </h2>
              <p className="text-lg sm:text-xl text-white/90 max-w-md">
                Streamline your supply chain with confidence. Connect with verified suppliers and secure competitive quotes instantly.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <p className="text-2xl sm:text-3xl font-bold text-white">500+</p>
                <p className="text-xs sm:text-sm text-white/80 mt-1">Active Suppliers</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <p className="text-2xl sm:text-3xl font-bold text-white">50K+</p>
                <p className="text-xs sm:text-sm text-white/80 mt-1">Products</p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 max-w-md">
              <p className="text-sm sm:text-base text-white/90 mb-4">
                "BZION Hub transformed how we source. Response times dropped by 70% and we discovered amazing new suppliers."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center text-white font-bold text-sm">
                  JD
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Jane Doe</p>
                  <p className="text-xs text-white/70">Procurement Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
