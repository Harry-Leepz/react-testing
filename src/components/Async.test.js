import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  /*
    Test if the list items are present on the screen 
  */

  test("renders post if request succeeds", async () => {
    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });

  /*
    Using a MOCK, to mock an api call to avoid network traffic
  */
  test("render posts if the api request succeeds", async () => {
    // overwrite the window.fetch method with a jest mock function
    window.fetch = jest.fn();
    // mock the json method used on response promises
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
