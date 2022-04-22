import { SelectOption } from "../components/Select";

export const transformValueForSelect = (array: any) => {
  const response: SelectOption[] = array.map((option: any) => ({
      label: option.name,
      value: option.id
    }));
  return response;
};
