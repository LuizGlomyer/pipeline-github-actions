import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('App header has background-color set as #282c34', () => {
  render(<App />);
  const appHeader = screen.getByTestId('app-header');

  // Get the computed background-color style of the .App-header element
  const backgroundColor = window.getComputedStyle(appHeader).getPropertyValue('background-color');

  // Assert that the background-color is #282c34
  expect(backgroundColor).toBe('rgb(40, 44, 52)');
});

test('increments counter when button is clicked', () => {
  const { getByText } = render(<App />);
  const button = screen.getByText('Click me');
  const counter = screen.getByText('You clicked 0 times.');

  fireEvent.click(button);

  expect(counter).toHaveTextContent('You clicked 1 times.');
});

test('adds all inputted strings to list when button is clicked', () => {
  render(<App />);

  // Get input field and button
  const inputField = screen.getByPlaceholderText('Enter a value');
  const addButton = screen.getByText('Add to List');

  // Enter multiple strings into the input field and click the button
  const inputStrings = ['Test string 1', 'Test string 2', 'Test string 3'];
  inputStrings.forEach((str) => {
    fireEvent.change(inputField, { target: { value: str } });
    fireEvent.click(addButton);
  });

  // Check if all inputted strings are added to the list
  inputStrings.forEach((str) => {
    const addedString = screen.getByText(str);
    expect(addedString).toBeInTheDocument();
  });
});
