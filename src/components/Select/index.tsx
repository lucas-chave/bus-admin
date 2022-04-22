import { forwardRef, SelectHTMLAttributes } from "react";
import { nanoid } from "nanoid";

import { Container, Label, NativeSelect, Error } from "./styles";

export interface SelectOption {
  value: string|number|boolean;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: SelectOption[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { label, error, options, id, ...selectProps } = props;
  const selectId = id ?? nanoid();

  return (
    <Container role="container">
      <Label htmlFor={selectId}>
        {label}
      </Label>
      <NativeSelect id={selectId} ref={ref} {...selectProps}>
        <option value="" disabled>
          Escolha uma opção
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value as any}>
            {option.label}
          </option>
        ))}
      </NativeSelect>
      {error && <Error role="error">{error}</Error>}
    </Container>
  );
});

export default Select;
