interface ButtonProps {
  label: string;
  onClick: () => void;
}

function Button({ label, onClick }: ButtonProps) {
  return (
    <button className="btn btn-primary btn-lg" type="button" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
