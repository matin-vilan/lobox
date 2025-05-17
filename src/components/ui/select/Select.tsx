import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

export interface ISelectOptions {
  label: string;
  value: string;
  id: string;
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      setIsOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside); // check any mouse click
    return () => document.removeEventListener("mousedown", handleClickOutside); // this is the clean up function
  }, [handleClickOutside]);

  return (
    <div
      className={styles.selectContainer}
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.select} onClick={() => setIsOpen((prev) => !prev)}>
        {value.length > 0
          ? value
              .map((val) => {
                const option = options.find((o) => o.id === val);
                return option?.label;
              })
              .join(", ")
          : label || placeholder || "Choose ..."}
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          {options.map((option, i) => (
            <div
              key={`${option.id}_${i}`}
              className={`${styles.option} ${
                value.includes(option.id) ? styles.selected : ""
              }`}
              onClick={() => handleSelect(option.id)}
            >
              {option.label}
              {value.includes(option.id) && (
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
