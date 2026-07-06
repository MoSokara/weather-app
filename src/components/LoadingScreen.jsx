// Icons (Fontawsome)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

// Hooks
import { useTheme } from "../contexts/ThemeContext";

function LoadingScreen() {
  const { theme } = useTheme();
  const styles = {
    layout: "min-h-screen flex justify-center items-center",
    color: "bg-amber-200 md:bg-amber-100",
  };

  return (
    <div className={`${theme} ${styles.color} ${styles.layout}`}>
      <FontAwesomeIcon icon={faCircleNotch} size="8x" spin />
    </div>
  );
}

export default LoadingScreen;
