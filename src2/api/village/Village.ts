import axios from "axios";
import { apiUrl } from "../../shared/env";
import { combineURLPaths } from "../../utils/urlHelper";

export const getAllUser = async () => {
  const response = await axios.get(combineURLPaths(apiUrl, `api/v1/user/get-all`));
  return response;
};