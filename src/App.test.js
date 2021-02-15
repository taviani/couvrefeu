import { render, screen } from '@testing-library/react';
import App from './App';

test('renders sentence start: C\'est ', () => {
  render(<App />);
  const sentenceElement = screen.getByText(/C\'est/i);
  expect(sentenceElement).toBeInTheDocument();
});
