import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

// Grouping Tests together with a Test Suite
describe("Greeting Component", () => {
  test("renders 'Hello World' as text", () => {
    // Arrange - Import the components beings tested
    render(<Greeting />);

    // Act - Execute functions to run tests
    // ...nothing

    // Assert - What is the expected result ? What do you expect to see ?
    const element = screen.getByText(/hello world/i);
    expect(element).toBeInTheDocument();
  });

  test("renders 'It's good to see you' text prior to button click", () => {
    render(<Greeting />);

    // Test to see if text can be found withing the component
    const screenText = screen.getByText(/It's good to see you/i);
    expect(screenText).toBeInTheDocument();
  });

  test("renders 'Text has been changed! WOW!!!!' after the button has been clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const screenText = screen.getByText(/Text has been changed! WOW!!!!/i);
    expect(screenText).toBeInTheDocument();
  });

  test("does not render 'It's good to see you' after the button has been clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // queryByText will return NULL if the text is NOT found
    const screenText = screen.queryByText(/It's good to see you/i);
    // we expect the result to be null because the text should not be on the screen
    expect(screenText).toBeNull();
  });
});
