import styles from "./styles.module.scss";

const Button = ({
  children,
  variant = "primary",
  className,
}: {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={`${styles.button} ${styles[variant]} ${className} `}>
      {children}
    </button>
  );
};

export default Button;
