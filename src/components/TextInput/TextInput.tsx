import { useState } from "react";
import "./TextInput.css";

interface ITextInputProps {
  inputText: string;
  setInputText: (val: string) => void;
}

export const TextInput = ({ inputText, setInputText }: ITextInputProps) => {
  const [focus, setFocus] = useState(false);

  return (
    <div className={`input-container${focus ? " animate" : ""}`}>
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
        autoFocus
      />
    </div>
  );
};
