export interface IAppContext {
  inputText: string;
  isLoading: boolean;

  setInputText: (val: string) => void;
  setIsLoading: (val: boolean) => void;
}
