import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';
import { FormatList } from './FormatList';

const MockedFormatList = () => {
  const [format, setformat] = useState("mp3");
  return(
    <FormatList downloadFormat={format} setDownloadFormat={setformat}/>
  )
}

describe('Format List', () => {
  beforeEach(() => {
    render(
      <MockedFormatList />
    );
  });

  afterEach(cleanup);

  it('should change to the correct download format on click', () => {
    const radioButton = screen.getByTestId("radio-mp3") as HTMLInputElement;
    expect(radioButton.checked).toBeTruthy();

    const radioButtonOther = screen.getByTestId("radio-mp4") as HTMLInputElement;
    
    expect(radioButtonOther.checked).toBeFalsy();
    
    act(() => { fireEvent.click(radioButtonOther) });
    expect(radioButton.checked).toBeFalsy();
    expect(radioButtonOther.checked).toBeTruthy();
  });
});
