// Icons (Fontawsome)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

function LoadingScreen() {
  const styles = {
    layout: "min-h-screen flex justify-center items-center",
    color: "text-slate-900 dark:text-slate-50",
  };

  return (
    <div className={`${styles.color} ${styles.layout}`}>
      <FontAwesomeIcon icon={faCircleNotch} size="7x" spin />
    </div>
  );
}

export default LoadingScreen;
