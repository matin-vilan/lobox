// we can handle this in .env file but in this case i dont do this
const backendEntity = "http://localhost:3001/api";

import type { ICreateOptionDTO } from "@/types/options";
import type { ISelectOptions } from "@components/ui/select/Select";

export const readOptions = async () => {
  try {
    const res = await fetch(`${backendEntity}/options`);
    const response = await res.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const writeOption = async (
  body: ICreateOptionDTO
): Promise<ISelectOptions> => {
  try {
    const newOption = { id: Date.now().toString(), ...body };
    await fetch(`${backendEntity}/options`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOption),
    });
    return newOption;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteOption = async (id: string): Promise<void> => {
  try {
    await fetch(`${backendEntity}/options/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};
