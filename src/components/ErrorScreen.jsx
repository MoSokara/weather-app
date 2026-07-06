// Icons (Fontawsome)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

function ErrorScreen({ error }) {
  const styles = {
    base: "md:w-fit rounded-mflex flex-col justify-center border-2 rounded-md border-red-500 items-center",
    title: "text-3xl p-3 text-white bg-red-500 w-full font-bold mb-2",
    errorMsg: "p-3 text-center text-red-500 dark:text-red-200 text-2xl",
    refreshBtn:
      "mt-4 mb-4 px-4 py-2 bg-red-500 text-white rounded cursor-pointer hover:bg-red-600",
  };

  return (
    <div className={styles.base}>
      <h3 className={styles.title}>
        <FontAwesomeIcon icon={faTriangleExclamation} /> Error
      </h3>
      <p className={styles.errorMsg}>
        {error || "An unexpected error occurred. Please try again later."}
      </p>
      <button
        onClick={() => window.location.reload()}
        className={styles.refreshBtn}
      >
        Refresh
      </button>
    </div>
  );
}

export default ErrorScreen;
