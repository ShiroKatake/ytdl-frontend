import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';
import { FormatList } from './FormatList';

const MockedFormatList = () => {
  const [format, setformat] = useState("mp3");
  return(
    <FormatList downloadFormat={format} setDownloadFormat={setformat}/>
  )
}

describe('Testiemonial Page', () => {
  beforeEach(async () => {
    render(
      <MockedFormatList />
    );
  });

  afterEach(cleanup);

  it('should change to the correct download format on click', async () => {
    const radioButton: HTMLInputElement = await screen.findByTestId("radio-mp3");
    expect(radioButton.checked).toBeTruthy();

    const radioButtonOther: HTMLInputElement = await screen.findByTestId("radio-mp4");
    
    expect(radioButtonOther.checked).toBeFalsy();
    
    act(() => {
      fireEvent.click(radioButtonOther);
    });
    expect(radioButton.checked).toBeFalsy();
    expect(radioButtonOther.checked).toBeTruthy();
  });
});
