import { render, screen } from '@testing-library/react';
import Nav from './Nav';

test('renders Nav', () => {
  render(<Nav />);

  const navElement = screen.getByRole('navigation');
  expect(navElement).toBeInTheDocument();
});
