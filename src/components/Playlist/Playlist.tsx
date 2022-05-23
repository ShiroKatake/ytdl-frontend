import { useEffect, useState } from "react";
import { Button } from "..";
import { PlaylistHeader } from "./components/PlaylistHeader";
import { PlaylistItems } from "./components/PlaylistItems";
import "./Playlist.css";

export interface IPlaylistProps {
  playlistInfo: any;
  download: (videoId: string) => void;
}

export interface ICheckbox {
  [key: number]: boolean;
}

export interface IPlaylistObject {
  [key: number]: string;
}

export const Playlist = ({ playlistInfo, download }: IPlaylistProps) => {
  const initialChecked: ICheckbox = {};
  const videoIdList: IPlaylistObject = {};
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [isChecked, setIsChecked] = useState(initialChecked);

  const checkOnce = (index: number) => {
    setIsChecked((prevState: any) => {
      const newState = { ...prevState };
      newState[index] = !prevState[index];
      return newState;
    });
  };

  const checkAll = (state: boolean) => {
    setIsCheckedAll(state);
    setIsChecked((prevState: any) => {
      for (const index in prevState) {
        prevState[index] = state;
      }
      return prevState;
    });
  };

  useEffect(() => {
    let isAllChecked = true;
    for (const index in isChecked) {
      if (isChecked[index] !== isAllChecked) {
        isAllChecked = false;
        break;
      }
    }
    setIsCheckedAll(isAllChecked);
    // console.log(videoIdList);
    // console.log(isChecked);
  }, [isChecked]);

  // To be deleted
  useEffect(() => {
    // console.log(videoIdList);
    // console.log(isChecked);
  }, [isCheckedAll]);

  // prettier-ignore
  return (
    <>
      <h1>{playlistInfo.author.name + " - " + playlistInfo.title}</h1>
      <div data-testid="playlist" className="playlist">
        <table>
          <thead>
            <PlaylistHeader
              isCheckedAll={isCheckedAll}
              checkAll={checkAll}
            />
          </thead>
          <tbody>
            <PlaylistItems
              playlistInfo={playlistInfo}
              checked={isChecked}
              checkOnce={checkOnce}
              initialChecked={initialChecked}
              videoIdList={videoIdList}
              download={download}
            />
          </tbody>
        </table>
        <div className="download-selected-btn">
          <Button data-testid="downloadSelectedButton" onClick={() => download(JSON.stringify(isChecked))}>
            Download Selected
          </Button>
        </div>
      </div>
    </>
  );
};
