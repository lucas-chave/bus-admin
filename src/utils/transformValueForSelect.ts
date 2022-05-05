import { SelectOption } from "../components/Select";

export const transformValueForSelect = (array: any, bus?: string) => {
  if (bus === 'bus') {
    const response: SelectOption[] = array.map((option: any) => ({
      label: `${option.plate}-${option.prefix}`,
      value: option.id
    }));
    return response;  
  }
  const response: SelectOption[] = array.map((option: any) => ({
      label: option.full_name || option.name,
      value: option.id
    }));
  return response;
};
