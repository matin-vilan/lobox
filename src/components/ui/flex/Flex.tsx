import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

const Flex = ({
  children,
  className,
  direction = "row",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "row" | "column";
}) => {
  const flexClass = clsx(
    styles.flex,
    styles[`direction-${direction}`],
    className
  );

  return <div className={flexClass}>{children}</div>;
};

export default Flex;
