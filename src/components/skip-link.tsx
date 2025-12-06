/**
 * Skip Link Component
 * Provides keyboard users with a way to skip directly to main content
 * Visible only on focus for accessibility
 */

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="skip-link"
      aria-label="Skip to main content"
    >
      Skip to main content
    </a>
  );
}
