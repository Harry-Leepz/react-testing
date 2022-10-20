import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

// Grouping Tests together with a Test Suite
describe("Greeting Component", () => {
  test("Render Hello World as text", () => {
    // Arrange - Import the components beings tested
    render(<Greeting />);

    // Act - Execute functions to run tests
    // ...nothing

    // Assert - What is the expected result ? What do you expect to see ?
    const element = screen.getByText(/hello world/i);
    expect(element).toBeInTheDocument();
  });

  test("Render text prior to button click", () => {
    render(<Greeting />);

    // Test to see if text can be found withing the component
    const screenText = screen.getByText(/It's good to see you/i);
    expect(screenText).toBeInTheDocument();
  });
});
