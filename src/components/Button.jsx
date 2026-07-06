function Button({ children, ...props }) {
  const styles = {
    base: "px-3 py-2 rounded-md cursor-pointer",
    colors: "bg-amber-500 text-white dark:bg-blue-600",
    hover: "hover:bg-amber-600 dark:hover:bg-blue-700",
    active: "active:bg-amber-500 dark:active:bg-blue-600",
    transition: "transition transition-discrete duration-150 ease-in-out",
  };

  return (
    <button
      className={`${styles.base} ${styles.colors} ${styles.hover} ${styles.active} ${styles.transition}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
