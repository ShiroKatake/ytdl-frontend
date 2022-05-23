import "@testing-library/react/dont-cleanup-after-each";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { AppContextProvider, useAppContext } from "../../context/AppContext";
import { Button } from "./Button";

const MockedButtons = () => {
  const { setButtonIsLoading } = useAppContext();

  // prettier-ignore
  return (
    <>
      <Button data-testid="main-button" main onClick={() => { setButtonIsLoading(true) }}>Search</Button>
      <Button data-testid="normal-button" onClick={() => { setButtonIsLoading(true) }}>Download</Button>
    </>
  );
};

describe("Button", () => {
  render(
    <AppContextProvider>
      <MockedButtons />
    </AppContextProvider>
  );

  it("should render button with correct class depending on main prop", () => {
    const buttonMain = screen.getByTestId("main-button");
    const buttonNorm = screen.getByTestId("normal-button");

    expect(buttonMain.textContent).toBe("Search");
    expect(buttonNorm.textContent).toBe("Download");
    expect(buttonMain.className).toBe("btn-animate main");
    expect(buttonNorm.className).toBe("btn-animate");
  });

  it("should display loading circle on all buttons on clicking any button", () => {
    const buttonMain = screen.getByTestId("main-button");
    const buttonNorm = screen.getByTestId("normal-button");

    fireEvent.click(buttonMain);

    expect(buttonMain.className).toBe("btn-animate main loading");
    expect(buttonNorm.className).toBe("btn-animate loading");
  });

  afterAll(() => {
    cleanup();
  });
});
