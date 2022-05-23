import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Suggestions } from "./Suggestions";
import mockedSuggestions from "./mock/mockedSuggestions";

const mockedDownload = jest.fn((videoId: string) => videoId);
const setupRender = () => {
  render(<Suggestions suggestions={mockedSuggestions} download={mockedDownload} />);
  mockedDownload.mockClear();
}

describe("Suggestions", () => {
  afterEach(cleanup);

  it("should render the correct amount of videos", () => {
    setupRender();
    const videoSuggestions = screen.getAllByTestId(/^video-\d$/);
    expect(videoSuggestions.length).toBe(5);
  });

  it("should contain the correct url", () => {
    setupRender();
    const videoUrl = screen.getByTestId("url-1") as HTMLAnchorElement;
    expect(videoUrl.href).toBe("https://youtube.com/watch?v=videoId1");
  });

  it("should contain the correct title", () => {
    setupRender();
    const videoTitle = screen.getByTestId("title-1");
    expect(videoTitle.textContent).toBe("National Geographic - Saturn 101 | National Geographic");
  });

  it("should pass the correct video id on download", () => {
    setupRender();
    const downloadButton = screen.getByTestId("downloadButton-video0");
    fireEvent.click(downloadButton);

    expect(mockedDownload).toHaveBeenCalledWith("videoId0");
  });
});
