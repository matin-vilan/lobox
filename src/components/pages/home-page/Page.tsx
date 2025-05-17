import Flex from "@components/ui/flex/Flex";
import SelectOption from "./SelectOption";
import EnterOption from "./EnterOption";
import styles from "./styles.module.scss";
import { OptionsContext } from "@/contexts/optionsContext";
import type { ISelectOptions } from "@components/ui/select/Select";
import { useMemo, useState } from "react";
import ListOptions from "./ListOptions";

const HomePage = () => {
  const [options, setOptions] = useState<ISelectOptions[]>([]);

  const contextValues = useMemo(() => {
    return { options, setOptions };
  }, [options]);

  return (
    <OptionsContext.Provider value={contextValues}>
      <Flex className={styles.wrappersGap}>
        <div className={styles.formContent}>
          <EnterOption />
        </div>
        <div className={styles.formContent}>
          <SelectOption />
        </div>
        <div className={styles.formContent}>
          <ListOptions />
        </div>
      </Flex>
    </OptionsContext.Provider>
  );
};

export default HomePage;
