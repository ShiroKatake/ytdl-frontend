import "./Button.css";

interface IButtonProps {
  isLoading: boolean;
  onClick: () => void;
}

export const Button = ({ isLoading, onClick }: IButtonProps) => {
  return (
    <button disabled={isLoading} className={`btn-animate ${isLoading ? "loading" : ""}`} onClick={onClick}>
      <p>Search</p>
      <div className="spinner" />
    </button>
  );
};
