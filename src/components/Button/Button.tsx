import { IoMdDownload } from "react-icons/io";
import { useAppContext } from "../../context/AppContext";
import "./Button.css";

interface IButtonProps {
  main?: boolean;
  children?: string;
  onClick: () => void;
}

export const Button = ({ main, children, onClick, ...props }: IButtonProps) => {
  const { buttonIsLoading: isLoading } = useAppContext();
  
  return (
    <button
      {...props}
      disabled={isLoading}
      className={`btn-animate${main ? " main" : ""}${isLoading ? " loading" : ""}`}
      onClick={onClick}
    >
      <span>{children ? children : <IoMdDownload />}</span>
      <div className="spinner" />
    </button>
  );
};
