import { LoginForm } from "@/ınterfaces/CommonTypes";
import axios, { AxiosRequestConfig } from "axios";

export const loginRequest = (form: LoginForm) => axios.post(`https://dummyjson.com/auth/login`, form as AxiosRequestConfig<LoginForm>);

