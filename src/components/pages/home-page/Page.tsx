import Flex from "@components/ui/flex/Flex";
import SelectOption from "./SelectOption";
import EnterOption from "./EnterOption";
import styles from "./styles.module.scss";

const HomePage = () => {
  return (
    <Flex className={styles.wrappersGap}>
      <div className={styles.formContent}>
        <EnterOption />
      </div>
      <div className={styles.formContent}>
        <SelectOption />
      </div>
    </Flex>
  );
};

export default HomePage;
