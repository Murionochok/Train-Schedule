import { LoginFormInputs, RegisterFormInputs } from "../interfaces/user";
import baseUrl from "./base";

export async function loginUser(loginData: LoginFormInputs) {
  const data = await baseUrl.post("auth/login/", loginData);
  sessionStorage.setItem("token", data.data.access_token);
  return data;
}

export async function registerUser(registerUser: RegisterFormInputs) {
  const data = await baseUrl.post("users/register/", registerUser);
  return data;
}
