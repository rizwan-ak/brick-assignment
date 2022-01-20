import "../styles/buttons.css";

export default function BAButton({ value, handleButtonClick }) {
  return (
    <div className="button-box">
      <button className="load-more-button" onClick={handleButtonClick}>
        {value}
      </button>
    </div>
  );
}
