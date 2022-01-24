import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';
import { TextInput } from './TextInput';

const MockedTextInput = () => {
  const [inputText, setInputText] = useState("mp3");
  return(
    <TextInput inputText={inputText} setInputText={setInputText}/>
  )
}

describe('Testiemonial Page', () => {
  beforeEach(() => {
    render(
      <MockedTextInput />
    );
  });

  afterEach(cleanup);

  it('should change to the correct download inputText on click', () => {
    const searchBar = screen.getByTestId("searchBar") as HTMLInputElement;
    const textToFill = { 
      target: { value: "saturn" }
    };

    act(() => { fireEvent.change(searchBar, textToFill) });

    expect(searchBar.parentElement?.className).toBe("input-container animate");
    expect(searchBar.value).toBe("saturn");

    act(() => { fireEvent.blur(searchBar) });
    expect(searchBar.parentElement?.className).toBe("input-container");
  });
});
