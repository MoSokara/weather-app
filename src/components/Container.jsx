function Container({ children }) {
  const styles = {
    layout: "md:w-fit rounded-md",
    color: "md:border-2 md:border-blue-200 md:dark:border-slate-600",
  };

  return <div className={`${styles.layout} ${styles.color}`}>{children}</div>;
}

export default Container;
