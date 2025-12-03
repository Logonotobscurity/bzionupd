import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { findImage } from '@/lib/placeholder-images';

const loginImage = findImage('login-bg');

export default function LoginPage() {
  return (
    <div className="w-full lg:grid lg:min-h-[calc(100vh-10rem)] lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <p className="text-balance text-muted-foreground">
              Enter your details to access your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
            <Button variant="outline" className="w-full">
              Continue with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block relative">
        {loginImage && (
            <Image
                src={loginImage.imageUrl}
                alt={loginImage.description}
                data-ai-hint={loginImage.imageHint}
                fill
                className="object-cover"
            />
        )}
        <div className="absolute inset-0 bg-primary/80 flex flex-col justify-end p-12 text-white">
            <div className="relative z-10">
                <h2 className="text-4xl font-bold">BZION Hub Digital</h2>
                <p className="mt-4 text-lg">"The efficiency of our procurement process has skyrocketed. Finding reliable suppliers and getting competitive quotes is easier than ever."</p>
                <p className="mt-6 font-semibold">- Jane Doe, Procurement Manager</p>
            </div>
        </div>
      </div>
    </div>
  );
}
