import { cleanup, render, screen } from "@testing-library/react";
import { CurrentVideoInfo } from "./CurrentVideoInfo";

const currentVideoInfo = {
  title: "videoTitle",
  videoId: "videoId",
};

describe("CurrentVideoInfo", () => {
  it("should render the current video with correct details", () => {
    render(<CurrentVideoInfo currentVideoInfo={currentVideoInfo} />);
    const thumbnail = screen.getByAltText("videoTitle") as HTMLImageElement;
    const title = screen.getByText("videoTitle") as HTMLHeadingElement;

    expect(thumbnail.src).toBe("https://i.ytimg.com/vi/videoId/hqdefault.jpg");
    expect(title.tagName).toBe("H2");
  });
  cleanup();
});
