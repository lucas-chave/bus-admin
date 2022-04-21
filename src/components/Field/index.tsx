import { nanoid } from "@reduxjs/toolkit";
import { forwardRef, InputHTMLAttributes } from "react";
import { AnyMask } from "react-imask";
import { Container, Error, Input, Label, MaskedInput } from "./styles";

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  mask?: AnyMask;
}

export const Field = forwardRef<HTMLInputElement, FieldProps>((props, ref) => {
  const { label, error, mask, id, ...inputProps } = props;
  const inputId = id ?? nanoid();

  return (
    <Container role="container">
      <Label htmlFor={inputId} role="label">{label}</Label>
      {mask ? (
        <MaskedInput
          {...inputProps}
          id={inputId}
          inputRef={ref}
          mask={mask}
          onAccept={props.onChange}
          role="mask-input"
        />
      ) : (
        <Input {...inputProps} id={inputId} ref={ref} role="input" />
      )}
      {error && <Error role="error">{error}</Error>}
    </Container>
  );
});
