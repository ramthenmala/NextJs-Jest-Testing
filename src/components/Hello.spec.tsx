import { render, screen } from '@testing-library/react';
import { Hello } from './Hello';

it('Should return a Hello text', () => {
  render(<Hello />);
  const helloString = screen.getByText(/Hello/);
  expect(helloString).toBeInTheDocument();
});
