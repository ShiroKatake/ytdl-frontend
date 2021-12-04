import { Dispatch, SetStateAction, useState } from "react";
import "./TextInput.css";

interface ITextInputProps {
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
}

export const TextInput = ({ inputText, setInputText }: ITextInputProps) => {
  const [focus, setFocus] = useState(false);

  return (
    <div className={`input-container ${focus ? "shadow" : ""}`}>
      <input
        type="text"
        name="input"
        id="text"
        placeholder="Search or paste url"
        spellCheck={false}
        autoComplete="off"
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        autoFocus
      />
    </div>
  );
};
