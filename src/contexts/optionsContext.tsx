import type { ISelectOptions } from "@components/ui/select/Select";
import { createContext, type Dispatch, type SetStateAction } from "react";

interface IOptionsContext {
  options: ISelectOptions[];
  setOptions: Dispatch<SetStateAction<ISelectOptions[]>>;
}

export const OptionsContext = createContext<IOptionsContext>({
  options: [],
  setOptions: () => {},
});
