import "./Button.css";

export const Button = ({ value, onClick }) => {
  return (
    <button className={"button"} onClick={onClick}>
      {value}
    </button>
  );
};
