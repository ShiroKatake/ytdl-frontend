import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { Playlist } from './Playlist';
import mockedPlaylist from '../../mocks/mockedPlaylist';

const mockedDownload = jest.fn((videoId: string) => videoId)

describe('Testiemonial Page', () => {
  beforeEach(async () => {
    render(
      <Playlist playlistInfo={mockedPlaylist} download={mockedDownload}/>
    );
    mockedDownload.mockClear();
  });

  afterEach(cleanup);

  it('should pass the correct video id when click download', async () => {
    const downloadButton = await screen.findByTestId("downloadButton-0");

    act(() => {
      fireEvent.click(downloadButton);
    });
    expect(mockedDownload).toHaveBeenCalledTimes(1);
    expect(mockedDownload).toHaveBeenCalledWith("videoId0");
  });

  it('should pass the correct video id list when click download-selected', async () => {
    const checkboxAll = await screen.findByTestId("checkbox-universal");
    const checkboxSingle = await screen.findByTestId("checkbox-0");
    const checkboxSingleOther = await screen.findByTestId("checkbox-1");
    const downloadAllButton = await screen.findByTestId("downloadButton-selected");

    act(() => {
      fireEvent.click(checkboxSingleOther);
    });
    fireEvent.click(downloadAllButton);

    expect(mockedDownload).toHaveBeenCalledTimes(1);
    expect(mockedDownload).toHaveBeenCalledWith("{\"0\":false,\"1\":true}");

    act(() => {
      fireEvent.click(checkboxSingle);
    });
    fireEvent.click(downloadAllButton);

    expect(mockedDownload).toHaveBeenCalledTimes(2);
    expect(mockedDownload).toHaveBeenCalledWith("{\"0\":true,\"1\":true}");

    act(() => {
      fireEvent.click(checkboxAll);
    });
    fireEvent.click(downloadAllButton);

    expect(mockedDownload).toHaveBeenCalledTimes(3);
    expect(mockedDownload).toHaveBeenCalledWith("{\"0\":false,\"1\":false}");
  });
});
