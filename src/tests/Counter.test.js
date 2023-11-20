import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

// import necessary react testing library helpers here
// import the Counter component here

beforeEach(() => {
  // Render the Counter component here
  //hi
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  // render(<Counter />);
  const cnt = screen.getByText(/Counter/i);
  expect(cnt).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const cnt = screen.getByTestId('count');
  expect(cnt).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const cnt = screen.getByTestId('count');
  expect(cnt).toHaveTextContent('0');
  const inc = screen.getByRole('button', { name: '+' });
  fireEvent.click(inc);
  expect(cnt).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const cnt = screen.getByTestId('count');
  expect(cnt).toHaveTextContent('0');
  const dec = screen.getByRole('button', { name: '-' });
  fireEvent.click(dec);
  expect(cnt).toHaveTextContent('-1');
});
