import styles from "./styles.module.scss";

const Button = ({
  children,
  variant = "primary",
}: {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={`${styles.button} ${styles[variant]} `}>
      {children}
    </button>
  );
};

export default Button;
