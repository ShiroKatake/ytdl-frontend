import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { AppContextProvider } from "./context/AppContext";
import { App } from "./App";
import mockAxios from "axios";
import mockedSuggestions from "./components/Suggestions/mock/mockedSuggestions";
import mockedPlaylist from "./components/Playlist/mock/mockedPlaylist";

const setupRender = () => {
  render(
    <AppContextProvider>
      <App />
    </AppContextProvider>
  );
}

const typeIntoSearchBar = (value: string) => {
  const searchBar = screen.getByTestId("searchBar") as HTMLInputElement;
  const textToFill = { target: { value: value } };
  fireEvent.change(searchBar, textToFill);
}

const pressButtonToSearch = () => {
  const searchButton = screen.getByTestId("searchButton");
  fireEvent.click(searchButton);
}

const pressEnterToSearch = () => {
  const searchBar = screen.getByTestId("searchBar") as HTMLInputElement;
  fireEvent.keyPress(searchBar, { key: "Enter", charCode: 13 });
}

describe("App", () => {
  afterEach(cleanup);

  it("playlist integration testing with search bar and button", async () => {
    setupRender();
    (mockAxios.get as jest.Mock).mockImplementationOnce(() => Promise.resolve({ data: mockedPlaylist }));
    const url = "https://www.youtube.com/playlist?list=PLfKYcXx7bBHJs4wvq-7RrXqcUIJsikexB";

    typeIntoSearchBar(url);

    let playlist = screen.queryByTestId("playlist");
    expect(playlist).toBeFalsy();

    pressButtonToSearch();
    expect(mockAxios.get).toHaveBeenCalledWith(`/playlist?pl=${url}`);

    playlist = await screen.findByTestId("playlist");
    expect(playlist).toBeTruthy();
  });

  it("suggestion integration testing with search bar and button", async () => {
    setupRender();
    (mockAxios.get as jest.Mock).mockImplementationOnce(() => Promise.resolve({ data: mockedSuggestions }));

    typeIntoSearchBar("saturn");

    let suggestions = screen.queryByTestId("suggestion");
    expect(suggestions).toBeFalsy();


    pressButtonToSearch();
    expect(mockAxios.get).toHaveBeenCalledWith(`/suggestions?search=saturn`);

    suggestions = await screen.findByTestId("suggestion");
    expect(suggestions).toBeTruthy();
  });

  it("suggestion integration testing with search bar and enter", async () => {
    setupRender();
    (mockAxios.get as jest.Mock).mockImplementationOnce(() => Promise.resolve({ data: mockedSuggestions }));

    typeIntoSearchBar("saturn");

    let suggestions = screen.queryByTestId("suggestion");
    expect(suggestions).toBeFalsy();

    pressEnterToSearch();
    expect(mockAxios.get).toHaveBeenCalledWith(`/suggestions?search=saturn`);

    suggestions = await screen.findByTestId("suggestion");
    expect(suggestions).toBeTruthy();
  });
});
