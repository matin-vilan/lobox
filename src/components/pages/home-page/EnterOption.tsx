import { writeOption } from "@/api/optionsApi";
import { OptionsContext } from "@/contexts/optionsContext";
import Button from "@components/ui/button/Button";
import Flex from "@components/ui/flex/Flex";
import Input from "@components/ui/input/Input";
import { useContext } from "react";

const EnterOption = () => {
  const { options, setOptions } = useContext(OptionsContext);

  const onSubmit = async (formData: FormData) => {
    const body = {
      label: formData.get("label") as string,
      value: formData.get("value") as string,
    };
    const result = await writeOption(body);
    setOptions([...options, result]);
  };

  return (
    <form action={onSubmit}>
      <Flex direction="column">
        <Flex>
          <Input
            name="label"
            placeholder="Enter New Item Label ..."
            label="New Option Label"
          />
          <Input
            name="value"
            placeholder="Enter New Item Value ..."
            label="New Option Value"
          />
        </Flex>
        <Button type="submit">Submit</Button>
      </Flex>
    </form>
  );
};

export default EnterOption;
