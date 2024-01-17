import axios from "axios";
import Swal from "sweetalert2";
const { VITE_APP_SERVICE_API } = import.meta.env;

const http = axios.create({
  baseURL: VITE_APP_SERVICE_API,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*)|^.*$/, "$1");
    if (token) {
      config.headers.Authorization = token;
    }
    return config; //必須回傳config，否則axios會拋出錯誤
  },
  (err) => {
    return Promise.reject(err);
  },
);

http.interceptors.response.use(
  (res) => {
    // console.log(res.data);
    return res;
  },
  (err) => {
    console.log(err);
    const { status, statusText } = err.response;
    switch (status) {
      case 401:
        Swal.fire({
          icon: "error",
          text: "請重新登入",
        });
        break;
      case 403:
        Swal.fire({
          icon: "error",
          text: "權限不足",
        });
        break;
      case 404:
        Swal.fire({
          icon: "error",
          text: "對不起找不到你要的><",
        });
        break;
      default:
        Swal.fire({
          icon: "error",
          text: "發生錯誤了 請看console><",
        });
        break;
    }
    return Promise.reject(`狀態碼${status} 錯誤訊息${statusText}`); //必須回傳err，否則axios會拋出錯誤
  },
);

const path = {
  users: "/users",
  artists: "/artists",
  concerts: "/concerts",
  songs: "/songs",
  venues: "/venues",
  venues_comments: "/venues_comments",
};

export { http, path };
