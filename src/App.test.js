import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Eat pizza and be happy link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Eat pizza and be happy/i);
  expect(linkElement).toBeInTheDocument();
});
