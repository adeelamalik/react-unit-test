// This file contains the unit tests
import { render, screen, fireEvent } from '@testing-library/react';
import CheckboxWithLabel from './CheckboxWithLabel';
import '@testing-library/jest-dom';

describe('CheckboxWithLabel', () => {
  test('verify labelOff text when the checkbox is unchecked', () => {
    // Render the component with the expected labels for both labelOn/labelOff states
    render(<CheckboxWithLabel labelOn="Checked" labelOff="Unchecked" />);

    // Check that the default label is "Unchecked"
    const label = screen.getByText('Unchecked');
    expect(label).toBeInTheDocument(); // Label should start as "Unchecked"
  });

  test('verify labelOn text when the checkbox is checked', () => {
    // Render the component with the given labels
    render(<CheckboxWithLabel labelOn="Checked" labelOff="Unchecked" />);

    // Get the checkbox element
    const checkbox = screen.getByRole('checkbox');

    // Perform check operation
    fireEvent.click(checkbox);

    // Now the label should be updated to "Checked"
    const labelElement = screen.getByText('Checked');
    expect(labelElement).toBeInTheDocument(); // Label should now say "Checked"
  });

  test('verify switching between labelOn and labelOff upon clicking', () => {
    // Render the component
    render(<CheckboxWithLabel labelOn="Checked" labelOff="Unchecked" />);

    // Get the checkbox element from the screen
    const checkbox = screen.getByRole('checkbox');

    // Initially, making sure it shows "Unchecked"
    expect(screen.getByText('Unchecked')).toBeInTheDocument();

    // Perform check operation on checkbox
    fireEvent.click(checkbox);

    // Now it should switch to "Checked"
    expect(screen.getByText('Checked')).toBeInTheDocument();

    // Perform uncheck operation on checkbox
    fireEvent.click(checkbox);

    // It should go back to "Unchecked"
    expect(screen.getByText('Unchecked')).toBeInTheDocument();
  });

  test('verify switching checkbox state on click', () => {
    // Render the component with the labels
    render(<CheckboxWithLabel labelOn="Checked" labelOff="Unchecked" />);

    // Get the checkbox element
    const checkbox = screen.getByRole('checkbox');

    // Initially, the checkbox should be unchecked
    expect(checkbox).not.toBeChecked();

    // Perform uncheck operation on checkbox
    fireEvent.click(checkbox);

    // Verify that the checkbox is now checked
    expect(checkbox).toBeChecked();

    // Perform uncheck operation on checkbox
    fireEvent.click(checkbox);

    // Verify that it's now unchecked again
    expect(checkbox).not.toBeChecked();
  });
});
