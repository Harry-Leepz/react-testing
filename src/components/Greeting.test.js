import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("Render Hello World as text", () => {
  // Arrange - Import the components beings tested
  render(<Greeting />);

  // Act - Execute functions to run tests
  // ...nothing

  // Assert - What is the expected result ? What do you expect to see ?
  const element = screen.getByText(/hello world/i);
  expect(element).toBeInTheDocument();
});
