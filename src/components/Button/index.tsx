import { ButtonStyle } from './styles';

interface Props {
  title: string;
}

export const Button = ({ title, ...rest }: Props) => {
  return (
    <ButtonStyle type="submit" {...rest}>{title}</ButtonStyle>
  );
};
