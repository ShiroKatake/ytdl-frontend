import "./Button.css";

interface IButtonProps {
  onClick: () => void;
  disabled: boolean;
}

export const Button = ({ disabled, onClick }: IButtonProps) => {
  return (
    <button disabled={disabled} className="btn-animate" onClick={onClick}>
      Search
    </button>
  );
};
