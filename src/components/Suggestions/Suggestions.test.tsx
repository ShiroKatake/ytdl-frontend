import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { Suggestions } from './Suggestions';
import mockedSuggestions from '../../mocks/mockedSuggestions';

const mockedDownload = jest.fn((videoId: string) => videoId);

describe('Testiemonial Page', () => {
  beforeEach(async () => {
    render(
      <Suggestions suggestions={mockedSuggestions} download={mockedDownload}/>
    );
    mockedDownload.mockClear();
  });

  afterEach(cleanup);

  it('should render the correct amount of videos', async () => {
    const suggestions = await screen.findAllByTestId(/^video\d$/);
    expect(suggestions.length).toBe(5);
  });

  it('should open the correct video on click to watch', async () => {
    const videoToDownload = await screen.findByTestId("video0");
    const watchUrl = videoToDownload.querySelector("a") as HTMLAnchorElement;
    expect(watchUrl.href).toBe("https://youtube.com/watch?v=videoId0");
  });

  it('should contain the correct title', async () => {
    const videoToDownload = await screen.findByTestId("video0");
    const videoTitle = videoToDownload.querySelector(".title") as HTMLDivElement;
    expect(videoTitle.textContent).toBe("Sleeping At Last - Sleeping At Last - \"Saturn\" (Official Music Video)");
  });

  it('should pass the correct video id on click download', async () => {
    const downloadButton = await screen.findByTestId("downloadButton-video0");
    fireEvent.click(downloadButton);

    expect(mockedDownload).toHaveBeenCalledTimes(1);
    expect(mockedDownload).toHaveBeenCalledWith("videoId0");
  });
});