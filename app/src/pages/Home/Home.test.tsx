import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Home', () => {
  render(<Home />);

  const homeElement = screen.getByText('Hello World from Home!');
  expect(homeElement).toBeInTheDocument();
});
