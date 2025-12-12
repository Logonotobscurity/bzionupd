import { render, screen } from '@testing-library/react';
import { Logo } from '@/components/logo';

describe('Logo', () => {
  it('renders a link to the homepage with the logo image', () => {
    render(<Logo />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/');

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt', 'Bzion Hub Logo');
    expect(image.getAttribute('src')).toMatch(
      /_next\/image\?url=https%3A%2F%2Fi\.ibb\.co%2F1tfpsbFT%2Flogo-2\.png/
    );
  });
});
