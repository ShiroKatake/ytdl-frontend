interface ICurrentVideoInfoProps {
  currentVideoInfo: any;
}

export const CurrentVideoInfo = ({ currentVideoInfo }: ICurrentVideoInfoProps) => {
  return (
    <section className="downloading-section">
      <div>
        <h2>{currentVideoInfo.title}</h2>
        <br />
        <img src={`https://i.ytimg.com/vi/${currentVideoInfo.videoId}/hqdefault.jpg`} alt={currentVideoInfo.title} />
      </div>
    </section>
  );
};
