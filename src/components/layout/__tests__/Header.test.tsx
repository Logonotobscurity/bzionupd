import { render, screen, within } from '@testing-library/react';
import { Header } from '@/components/layout/header';

// Mock the useRouter hook
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  usePathname: () => '/',
}));

describe('Header', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it('renders the logo and navigation links', () => {
    render(<Header />);

    // Check for the logo
    expect(screen.getByRole('banner')).toBeInTheDocument();

    // Get the main navigation container for desktop
    const mainNav = screen.getByRole('navigation', { name: /desktop/i });

    // Check for navigation links within the main navigation
    expect(within(mainNav).getByText('About')).toBeInTheDocument();
    expect(within(mainNav).getByText('Products')).toBeInTheDocument();
    expect(within(mainNav).getByText('Customers')).toBeInTheDocument();
    expect(within(mainNav).getByText('Suppliers')).toBeInTheDocument();
    expect(within(mainNav).getByText('Careers')).toBeInTheDocument();
    expect(within(mainNav).getByText('Contact')).toBeInTheDocument();
  });
});
