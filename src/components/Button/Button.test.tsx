import "@testing-library/react/dont-cleanup-after-each";
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { AppContextProvider, useAppContext } from '../../context/AppContext';
import { Button } from './Button';

const MockedButtons = () => {
  const { setButtonIsLoading } = useAppContext();
  return(
    <>
      <Button data-testid="main-button" main onClick={() => {setButtonIsLoading(true)}}>Search</Button>
      <Button data-testid="normal-button" onClick={() => {setButtonIsLoading(true)}}>Download</Button>
    </>
  )
}

describe('Testiemonial Page', () => {
  render (
    <AppContextProvider>
      <MockedButtons />
    </AppContextProvider>
  );

  it("should render button with correct class depending on main prop", () => {
    const buttonMain = screen.getByText("Search").parentElement as HTMLInputElement;
    const buttonNorm = screen.getByText("Download").parentElement as HTMLInputElement;

    expect(buttonMain.className).toBe("btn-animate main");
    expect(buttonNorm.className).toBe("btn-animate");
  });

  it("should display loading circle on all buttons on clicking any button", () => {
    const buttonMain = screen.getByText("Search").parentElement as HTMLInputElement;
    const buttonNorm = screen.getByText("Download").parentElement as HTMLInputElement;

    act(() => { fireEvent.click(buttonMain) });
    expect(buttonMain.className).toBe("btn-animate main loading");
    expect(buttonNorm.className).toBe("btn-animate loading");
  });

  afterAll(() => {
    cleanup();
  });
});