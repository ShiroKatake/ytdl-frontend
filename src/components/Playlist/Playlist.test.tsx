import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Playlist } from "./Playlist";
import mockedPlaylist from "./mock/mockedPlaylist";

const mockedDownload = jest.fn((videoId: string) => videoId);
const setupRender = () => {
  render(<Playlist playlistInfo={mockedPlaylist} download={mockedDownload} />);
  mockedDownload.mockClear();
}

describe("Playlist", () => {

  it("should pass the correct video id on click download", () => {
    setupRender();
    const downloadButton = screen.getByTestId("downloadButton-0");
    fireEvent.click(downloadButton);

    expect(mockedDownload).toHaveBeenCalledWith("videoId0");
  });

  it("should not have any song selected initially for download", () => {
    setupRender();
    const downloadSelectedButton = screen.getByTestId("downloadSelectedButton");

    fireEvent.click(downloadSelectedButton);

    expect(mockedDownload).toHaveBeenCalledWith('{"0":false,"1":false}');
  });

  it("should download the correct video when it's checked", () => {
    setupRender();
    const song1Checkbox = screen.getByTestId("checkbox-1");
    const downloadSelectedButton = screen.getByTestId("downloadSelectedButton");

    fireEvent.click(song1Checkbox);
    fireEvent.click(downloadSelectedButton);

    expect(mockedDownload).toHaveBeenCalledWith('{"0":false,"1":true}');
  });

  it("should download all videos when checked all", () => {
    setupRender();
    const checkboxAll = screen.getByTestId("checkbox-universal");
    const downloadSelectedButton = screen.getByTestId("downloadSelectedButton");

    fireEvent.click(checkboxAll);
    fireEvent.click(downloadSelectedButton);

    expect(mockedDownload).toHaveBeenCalledWith('{"0":true,"1":true}');
  });
  afterEach(cleanup);
});
