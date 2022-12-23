import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {wrapper} from './wrapper.util'

test('renders learn react link', () => {
  render(<App />, {wrapper: wrapper});
  const linkElement = screen.getByText(/test/i);
  expect(linkElement).toBeInTheDocument();
});
