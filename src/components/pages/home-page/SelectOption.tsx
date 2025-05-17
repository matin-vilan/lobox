import { readOptions } from "@/api/optionsApi";
import { OptionsContext } from "@/contexts/optionsContext";
import MultiSelect from "@components/ui/select/Select";
import { useContext, useEffect, useState } from "react";

const SelectOption = () => {
  const [selectedValues, setSelectedValue] = useState<string[]>([]);
  const { options, setOptions } = useContext(OptionsContext);

  const handleSelectOption = (value: string[]) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    readOptions()
      .then((res) => setOptions(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <MultiSelect
      onChange={(val) => handleSelectOption(val)}
      value={selectedValues}
      options={options}
    />
  );
};

export default SelectOption;
