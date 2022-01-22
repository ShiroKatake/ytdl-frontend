interface IPlaylistHeaderProps {
  isCheckedAll: boolean;
  checkAll: (val: boolean) => void;
}

export const PlaylistHeader = ({isCheckedAll, checkAll}: IPlaylistHeaderProps) => {
  return (
    <tr>
      <th scope="col">#</th>
      <th scope="col">Thumbnail</th>
      <th scope="col">Title</th>
      <th scope="col">Download</th>
      <th scope="col">
        <>
          <label className="checkbox-label">Select All </label>
          <input
            type="checkbox"
            checked={isCheckedAll}
            id="selectAll"
            onChange={() => checkAll(!isCheckedAll)}
          />
        </>
      </th>
    </tr>
  );
};
