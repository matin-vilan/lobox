import { OptionsContext } from "@/contexts/optionsContext";
import { useContext } from "react";
import styles from "./styles.module.scss";
import { deleteOption } from "@/api/optionsApi";

const ListOptions = () => {
  const { options, setOptions } = useContext(OptionsContext);

  const onDelete = (id: string) => {
    const newOptions = options.filter((op) => op.id !== id);
    setOptions(newOptions);
    deleteOption(id);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    id: string
  ) => {
    if (e.key === "Enter") {
      onDelete(id);
    }
  };

  return (
    <div className={styles.list}>
      <p className={styles.title}>LIST</p>
      {options.map((op, i) => (
        <div
          className={styles.listItem}
          onClick={() => onDelete(op.id)}
          onKeyDown={(e) => handleKeyDown(e, op.id)}
          key={op.id}
          tabIndex={i}
        >
          {op.label}
          <div className={styles.delete}>🗑️</div>
        </div>
      ))}
    </div>
  );
};

export default ListOptions;
