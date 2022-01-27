import { act, cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { AppContextProvider } from "./context/AppContext";
import { App } from "./App";
import mockAxios from "axios";
import mockedSuggestions from "./__mocks__/mockedSuggestions";
import mockedPlaylist from "./__mocks__/mockedPlaylist";

describe("App", () => {
  beforeEach(() => {
    render(
      <AppContextProvider>
        <App />
      </AppContextProvider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  // prettier-ignore
  it("should render App with correct class depending on main prop", async () => {
    (mockAxios.get as jest.Mock).mockImplementationOnce(() => Promise.resolve({ data: mockedSuggestions }));

    // Type a search term into the search bar
    const searchBar = (await screen.findByTestId("searchBar")) as HTMLInputElement;
    const textToFill = { target: { value: "saturn" } };
    act(() => { fireEvent.change(searchBar, textToFill) });

    let videoSuggestion = screen.queryByTestId("video0");
    expect(videoSuggestion).toBeFalsy();

    // Press "Search"
    const searchButton = (await screen.findByText("Search")).parentElement as HTMLInputElement;
    act(() => { fireEvent.click(searchButton) });
    expect(mockAxios.get).toHaveBeenCalledWith(`/suggestions?search=saturn`);

    // Expect 5 videos returned
    const suggestions = await screen.findAllByTestId(/^video\d$/);
    expect(suggestions.length).toBe(5);

    // And they're from the data returned
    videoSuggestion = await screen.findByTestId("video0");
    expect(videoSuggestion).toBeTruthy();
  });

  // prettier-ignore
  it("should render App with correct class depending on main prop", async () => {
    (mockAxios.get as jest.Mock).mockImplementationOnce(() => Promise.resolve({ data: mockedPlaylist }));
    const url = "https://www.youtube.com/playlist?list=PLfKYcXx7bBHJs4wvq-7RrXqcUIJsikexB";

    // Type a search term into the search bar
    const searchBar = (await screen.findByTestId("searchBar")) as HTMLInputElement;
    const textToFill = { target: { value: url } };
    await act(async () => { fireEvent.change(searchBar, textToFill) });
    expect(searchBar.value).toBe(url);

    let checkboxAll = screen.queryByTestId("checkbox-universal");
    expect(checkboxAll).toBeFalsy();

    // Press "Search"
    const searchButton = (await screen.findByText("Search")).parentElement as HTMLInputElement;
    await act(async () => { fireEvent.click(searchButton) });
    expect(mockAxios.get).toHaveBeenCalledWith(`/playlist?pl=${url}`);

    checkboxAll = screen.queryByTestId("checkbox-universal");
    expect(checkboxAll).toBeTruthy();
  });
});
