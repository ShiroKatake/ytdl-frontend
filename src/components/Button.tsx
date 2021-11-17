interface IButtonProps {
  onClick: () => void;
}

const Button = ({ onClick }: IButtonProps) => {
  return (
    <>
      <button className="btn-animate" onClick={onClick}>
        Search
      </button>
    </>
  );
};

export default Button;
