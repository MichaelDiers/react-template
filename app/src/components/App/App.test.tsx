import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  const { container } = render(<App />);

  const header = container.querySelector('header');
  expect(header).not.toBeNull();
});

test('renders nav', () => {
  render(<App />);

  const navigation = screen.getByRole('navigation');
  expect(navigation).toBeInTheDocument();
});

test('renders main', () => {
  render(<App />);

  const main = screen.getByRole('main');
  expect(main).toBeInTheDocument();
});

test('renders footer', () => {
  const { container } = render(<App />);

  const footer = container.querySelector('footer');
  expect(footer).not.toBeNull();
});
