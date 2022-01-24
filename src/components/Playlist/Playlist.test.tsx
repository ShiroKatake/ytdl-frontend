import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { Playlist } from './Playlist';
import mockedPlaylist from '../../mocks/mockedPlaylist';

const mockedDownload = jest.fn((videoId: string) => videoId);

describe('Testiemonial Page', () => {
  beforeEach(() => {
    render(
      <Playlist playlistInfo={mockedPlaylist} download={mockedDownload}/>
    );
    mockedDownload.mockClear();
  });

  afterEach(cleanup);

  it('should pass the correct video id on click download', () => {
    const downloadButton = screen.getByTestId("downloadButton-0");
    fireEvent.click(downloadButton);

    expect(mockedDownload).toHaveBeenCalledTimes(1);
    expect(mockedDownload).toHaveBeenCalledWith("videoId0");
  });

  it('should pass the correct video id list on click download-selected', () => {
    const checkboxAll = screen.getByTestId("checkbox-universal");
    const checkboxSingle = screen.getByTestId("checkbox-0");
    const checkboxSingleOther = screen.getByTestId("checkbox-1");
    const downloadAllButton = screen.getByTestId("downloadButton-selected");

    act(() => { fireEvent.click(checkboxSingleOther) });
    fireEvent.click(downloadAllButton);

    expect(mockedDownload).toHaveBeenCalledTimes(1);
    expect(mockedDownload).toHaveBeenCalledWith("{\"0\":false,\"1\":true}");

    act(() => { fireEvent.click(checkboxSingle) });
    fireEvent.click(downloadAllButton);

    expect(mockedDownload).toHaveBeenCalledTimes(2);
    expect(mockedDownload).toHaveBeenCalledWith("{\"0\":true,\"1\":true}");

    act(() => { fireEvent.click(checkboxAll) });
    fireEvent.click(downloadAllButton);

    expect(mockedDownload).toHaveBeenCalledTimes(3);
    expect(mockedDownload).toHaveBeenCalledWith("{\"0\":false,\"1\":false}");
  });
});
