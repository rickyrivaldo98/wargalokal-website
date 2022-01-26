import axios from "axios";
import { apiUrl } from "src/shared/env";
import { combineURLPaths } from "src/utils/urlHelper";

export const getAllUser = async () => {
  const response = await axios.get(combineURLPaths(apiUrl, `api/v1/user/get-all`));
  return response;
};