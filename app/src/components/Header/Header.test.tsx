import { render } from '@testing-library/react';
import Header from './Header';

test('renders Header', () => {
  const { container } = render(<Header />);

  const headerElement = container.querySelector('header');
  expect(headerElement).not.toBeNull();
});
