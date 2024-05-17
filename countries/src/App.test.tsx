import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders User List', () => {
  render(<App />);
  const linkElement = screen.getByText(/User List/i);
  expect(linkElement).toBeInTheDocument();
});
