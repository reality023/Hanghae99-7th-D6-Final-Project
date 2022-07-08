import axios from "axios";
import { refresh } from "./auth";
import { getAccessToken, getRefreshToken, setToken } from "../shared/localStorage";

// library : sweetAlert

const SUCCESS = true;
const FAILED = false;
export const requestAxios = async (func) => {
  try {
    const response = await func();
    return { result: SUCCESS, data: response.data };
  } catch (err) {
    return { result: FAILED, data: err.response.data };
  }
}

export const instance = axios.create({
  baseURL: "http://13.124.160.57/"
});

instance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {

    const {
      config,
      response: { status },
    } = error;
    if (status === 403) { // 액세스 토큰이 실패한 경우, 토큰이 없는 경우
      if (error.response.data.message.slice(0, 11) === 'JWT expired') {
        const originalRequest = config;
        const token = getRefreshToken();
        if (token) {
          const { result, data } = await refresh(token);
          if (result) {
            console.log("SUCCESS");
            setToken(data.accessToken, data.refreshToken);
            return instance(originalRequest);
          }
        } else {
          window.location.replace("/");
        }
      }
    } else if (status === 500) {
      console.log(error);
      // window.location.replace("/");
    }
    return Promise.reject(error);
  },
);