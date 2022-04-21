// import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";

import { login } from "../../../store/slices/login/middleware";
import { useAppDispatch } from "../../../store/hooks";
import { ILogin } from "../../../types/auth";

import { Container } from "./styles";
import { schema } from "./validations";

export const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   if (false) {
  //     navigate("/dashboard");
  //   }
  // }, []);

  const onSubmit = async (data: ILogin) => {
    const response = await dispatch(login(data));
    if ((response as any).payload.token) navigate("/dashboard");
  };

  return (
    <Container>
      <div>
        <h3>Faça seu login!</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("username")} type="text" placeholder="usuário" />
          <span>{errors?.username?.message}</span>
          <input
            {...register("password")}
            type="password"
            placeholder="senha"
          />
          <span>{errors?.password?.message}</span>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </Container>
  );
};
