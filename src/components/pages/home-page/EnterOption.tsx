import Button from "@components/ui/button/Button";
import Flex from "@components/ui/flex/Flex";
import Input from "@components/ui/input/Input";

const EnterOption = () => {
  const onSubmit = (formData: FormData) => {
    console.log({ formData: Object.fromEntries(formData) });
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
