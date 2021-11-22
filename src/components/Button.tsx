interface IButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const Button = ({ disabled, onClick }: IButtonProps) => {
  return (
    <>
      <button disabled={disabled} className="btn-animate" onClick={onClick}>
        Search
      </button>
    </>
  );
};

export default Button;
