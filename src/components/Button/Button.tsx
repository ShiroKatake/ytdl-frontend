import { IoMdDownload } from "react-icons/io";
import "./Button.css";

interface IButtonProps {
  main?: boolean;
  children?: string;
  isLoading: boolean;
  onClick: () => void;
}

export const Button = ({ main, children, isLoading, onClick }: IButtonProps) => {
  return (
    <button disabled={isLoading} className={`btn-animate ${main ? "main" : ""} ${isLoading ? "loading" : ""}`} onClick={onClick}>
      <span>{children ? children : <IoMdDownload />}</span>
      <div className="spinner" />
    </button>
  );
};
