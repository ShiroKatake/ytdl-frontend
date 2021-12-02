import "./Button.css";

interface IButtonProps {
  main?: boolean;
  children: string;
  isLoading: boolean;
  onClick: () => void;
}

export const Button = ({ main, children, isLoading, onClick }: IButtonProps) => {
  return (
    <button disabled={isLoading} className={`btn-animate ${main ? "main" : ""} ${isLoading ? "loading" : ""}`} onClick={onClick}>
      <p>{children}</p>
      <div className="spinner" />
    </button>
  );
};
