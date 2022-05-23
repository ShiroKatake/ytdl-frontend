import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";
import { TextInput } from "./TextInput";

const MockedTextInput = () => {
  const [inputText, setInputText] = useState("mp3");
  return <TextInput inputText={inputText} setInputText={setInputText} onEnter={() => { }} />;
};

describe("Search Bar", () => {
  it("should have correct text when filled in", () => {
    render(<MockedTextInput />);
    const searchBar = screen.getByTestId("searchBar") as HTMLInputElement;
    const textToFill = {
      target: { value: "saturn" },
    };

    fireEvent.change(searchBar, textToFill);
    expect(searchBar.value).toBe("saturn");
  });

  it("should animate on focus", () => {
    render(<MockedTextInput />);
    const searchBar = screen.getByTestId("searchBar") as HTMLInputElement;
    const searchBarContainer = screen.getByTestId("searchBarContainer");
    const textToFill = {
      target: { value: "saturn" },
    };

    fireEvent.change(searchBar, textToFill);
    expect(searchBarContainer.className).toBe("input-container animate");

    fireEvent.blur(searchBar);
    expect(searchBarContainer.className).toBe("input-container");
  });
  cleanup();
});
