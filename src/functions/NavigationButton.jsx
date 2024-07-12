import { useNavigate } from "react-router-dom";

function NavigationButton({ to }) {
  let navigate = useNavigate();

  function handleClick() {
    navigate(to);
  }

  return (
    <button onClick={handleClick} className="projectButton">
      View Project
    </button>
  );
}

export default NavigationButton;
