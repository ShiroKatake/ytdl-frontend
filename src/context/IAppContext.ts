export interface IAppContext {
  inputText: string;
  buttonIsLoading: boolean;

  setInputText: (val: string) => void;
  setButtonIsLoading: (val: boolean) => void;
}
