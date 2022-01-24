import { cleanup, render, screen } from "@testing-library/react";
import { CurrentVideoInfo } from "./CurrentVideoInfo";

describe("CurrentVideoInfo", () => {
  const currentVideoInfo = {
    title: "videoTitle",
    videoId: "videoId",
  };
  beforeEach(() => {
    render(<CurrentVideoInfo currentVideoInfo={currentVideoInfo} />);
  });

  afterEach(cleanup);

  it("should render the correct amount of videos", () => {
    const thumbnail = screen.getByAltText("videoTitle") as HTMLImageElement;
    const title = screen.getByText("videoTitle") as HTMLHeadingElement;

    expect(thumbnail.src).toBe("https://i.ytimg.com/vi/videoId/hqdefault.jpg");
    expect(title.tagName).toBe("H2");
  });
});
