import he from "he";
import { useEffect, useState } from "react";
import { Button } from "..";
import "./Playlist.css";

interface IPlaylistProps {
  playlistInfo: any;
  download: (videoId: string) => void;
}

interface ICheckbox {
  [key: number]: boolean;
}

interface IPlaylistObject {
  [key: number]: string;
}

export const Playlist = ({ playlistInfo, download }: IPlaylistProps) => {
  const initialChecked: ICheckbox = {};
  const initialIdList: IPlaylistObject = {};
  const [checkedAll, setCheckedAll] = useState(false);
  const [checked, setChecked] = useState(initialChecked);

  const checkOnce = (index: number) => {
    setChecked((prevState: any) => {
      const newState = { ...prevState };
      newState[index] = !prevState[index];
      return newState;
    });
    console.log(initialIdList);
  };

  const checkAll = (state: boolean) => {
    setCheckedAll(state);
    setChecked((prevState: any) => {
      for (const index in prevState) {
        prevState[index] = state;
      }
      return prevState;
    });
  };

  useEffect(() => {
    let allChecked = true;
    for (const index in checked) {
      if (checked[index] !== allChecked) {
        allChecked = false;
        break;
      }
    }
    setCheckedAll(allChecked);
    console.log(checked);
  }, [checked]);

  return (
    <section className="playlist-section">
      <h1>{playlistInfo.author.name + " - " + playlistInfo.title}</h1>
      <div className="playlist">
        <table>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Thumbnail</th>
              <th scope="col">Title</th>
              <th scope="col">Download</th>
              <th scope="col">
                <div>
                  <input type="checkbox" checked={checkedAll} id="selectAll" onChange={() => checkAll(!checkedAll)} />
                  <label className="checkbox-label"> Select</label>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {playlistInfo.items.map((video: any, index: number) => {
              initialChecked[index] = false;
              initialIdList[index] = video.id;
              return (
                <tr key={video.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img width="100" src={video.bestThumbnail.url} alt={video.title} />
                  </td>
                  <td>{he.decode(video.title)}</td>
                  <td>
                    <Button onClick={() => download(video.id)} />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={checked[index]}
                      onChange={() => {
                        checkOnce(index);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="download-selected-btn">
          <Button onClick={() => download("video.id")}>
            Download Selected
          </Button>
        </div>
      </div>
    </section>
  );
};
