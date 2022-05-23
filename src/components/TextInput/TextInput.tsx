import { useState } from "react";
import "./TextInput.css";

interface ITextInputProps {
  inputText: string;
  setInputText: (val: string) => void;
  onEnter: () => void;
}

export const TextInput = ({ inputText, setInputText, onEnter }: ITextInputProps) => {
  const [focus, setFocus] = useState(false);
  const handleKeypress = (event: any) => {
    if (event.key === "Enter") {
      onEnter();
    }
  };

  // prettier-ignore
  return (
    <div data-testid="searchBarContainer" className={`input-container${focus ? " animate" : ""}`}>
      <input
        data-testid="searchBar"
        type="text"
        name="input"
        id="text"
        placeholder="Search or paste url"
        spellCheck={false}
        autoComplete="off"
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyPress={handleKeypress}
        autoFocus
      />
    </div>
  );
};
