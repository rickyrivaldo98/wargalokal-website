import axios from "axios";
import { apiUrl } from "src/shared/env";
import { combineURLPaths } from "src/utils/urlHelper";
import { User } from "./models/User";

export const getAllUser = async () => {
  const response = await axios.get<User>(combineURLPaths(apiUrl, `api/v1/user/get-all`));
  return response;
};

export const userLogin = async () => {
  const response = await axios.get(combineURLPaths(apiUrl, `api/v1/login`));
  return response;
};

export const userRegister = async () => {
  const response = await axios.get(combineURLPaths(apiUrl, `api/v1/sign-up`));
  return response;
};
