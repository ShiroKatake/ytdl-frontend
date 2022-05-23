import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";
import { FormatList } from "./FormatList";

const MockedFormatList = () => {
  const [format, setformat] = useState("mp3");
  return <FormatList downloadFormat={format} setDownloadFormat={setformat} />;
};

describe("Format List", () => {
  it("should have mp3 checked as default", () => {
    render(<MockedFormatList />);
    const mp3RadioButton = screen.getByTestId("radio-mp3") as HTMLInputElement;
    const mp4RadioButton = screen.getByTestId("radio-mp4") as HTMLInputElement;

    expect(mp3RadioButton.checked).toBeTruthy();
    expect(mp4RadioButton.checked).toBeFalsy();
  });

  it("should change to the correct download format on click", () => {
    render(<MockedFormatList />);
    const mp3RadioButton = screen.getByTestId("radio-mp3") as HTMLInputElement;
    const mp4RadioButton = screen.getByTestId("radio-mp4") as HTMLInputElement;

    fireEvent.click(mp4RadioButton);

    expect(mp3RadioButton.checked).toBeFalsy();
    expect(mp4RadioButton.checked).toBeTruthy();
  });
  cleanup();
});
