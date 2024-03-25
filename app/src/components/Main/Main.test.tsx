import { render, screen } from '@testing-library/react';
import Main from './Main';

test('renders Main', () => {
  render(<Main />);

  const mainElement = screen.getByRole('main');
  expect(mainElement).toBeInTheDocument();
});
