import MultiSelect from "@components/ui/select/Select";
import { useState } from "react";

const SelectOption = () => {
  const [selectedValues, setSelectedValue] = useState<string[]>([]);

  const handleSelectOption = (value: string[]) => {
    setSelectedValue(value);
  };

  return (
    <MultiSelect
      onChange={(val) => handleSelectOption(val)}
      value={selectedValues}
      options={options}
    />
  );
};

export default SelectOption;
