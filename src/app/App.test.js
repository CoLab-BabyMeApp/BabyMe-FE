import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BabyMe title', () => {
  render(<App />);
  const titleElement = screen.getByText(/babyme/i);
  expect(titleElement).toBeInTheDocument();
});
