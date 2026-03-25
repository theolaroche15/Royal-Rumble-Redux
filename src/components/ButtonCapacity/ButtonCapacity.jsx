import { useDispatch } from "react-redux";
import { hitMonster, hitBack } from "../../features/fight/fightSlice";
import "./ButtonCapacity.css";

function ButtonCapacity({ playerId }) {
  // useDispatch nous permet de dispatcher des actions
  const dispatch = useDispatch();

  const fight = () => {
    // Dispatche l'action hitMonster avec une force de 5
    dispatch(hitMonster(5));
    console.log("🗡️ Attaque lancée !");
    dispatch(hitBack(playerId));
    console.log("💥 Le monstre riposte !");
  };

  return (
    <button
      type="button"
      onClick={fight}
      className="btn btn-success material-tooltip-main "
    >
      hit
      <i className="fas fa-bomb"></i> 5<i className="fas fa-fire-alt"></i> - 5
    </button>
  );
}

export default ButtonCapacity;
