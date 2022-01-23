import he from "he";
import { Button } from "../..";
import { ICheckbox, IPlaylistObject, IPlaylistProps } from "../Playlist";

interface IPlaylistItemsProps extends IPlaylistProps {
  checked: ICheckbox;
  checkOnce: (val: number) => void;
  initialChecked: ICheckbox;
  videoIdList: IPlaylistObject;
}

export const PlaylistItems = ({playlistInfo, checked, checkOnce, initialChecked, videoIdList, download}: IPlaylistItemsProps) => {
  return (<>{
    playlistInfo.items.map((video: any, index: number) => {
      initialChecked[index] = false;
      videoIdList[index] = video.id;
      return (
        <tr key={video.id}>
          <td>{index + 1}</td>
          <td>
            <img width="100" src={video.bestThumbnail.url} alt={video.title} />
          </td>
          <td>{he.decode(video.title)}</td>
          <td>
            <Button data-testid={`downloadButton-${index}`} onClick={() => download(video.id)} />
          </td>
          <td>
            <input
              data-testid={`checkbox-${index}`}
              type="checkbox"
              checked={checked[index]}
              onChange={() => {
                checkOnce(index);
              }}
            />
          </td>
        </tr>
      );
    })
  }</>);
};
