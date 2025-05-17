import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

export interface ISelectOptions {
  label: string;
  value: string;
}

interface Props {
  options: ISelectOptions[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  label?: string;
  value: string[];
}

const MultiSelect = ({
  options,
  label,
  placeholder,
  onChange,
  value,
}: Props) => {
  const handleSelect = (val: string) => {
    if (value.includes(val)) {
      onChange(value.filter((v) => v !== val));
    } else {
      onChange([...value, val]);
    }
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside); // check any mouse click
    return () => document.removeEventListener("mousedown", handleClickOutside); // this is the clean up function
  }, [handleClickOutside]);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={styles.selectContainer} ref={containerRef}>
      <div className={styles.select} onClick={() => setIsOpen((prev) => !prev)}>
        {value.length > 0
          ? value
              .map((val) => {
                const option = options.find((o) => o.value === val);
                return option?.label;
              })
              .join(", ")
          : label || placeholder || "Choose ..."}
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          {options.map((option, i) => (
            <div
              key={`${option.value}_${i}`}
              className={`${styles.option} ${
                value.includes(option.value) ? styles.selected : ""
              }`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
              {value.includes(option.value) && (
                <span className={styles.check}>✔️</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
