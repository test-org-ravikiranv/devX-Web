import axios from "axios";

const customAxios = axios.create();
//     {
//   baseURL: process.env.REACT_APP_BASE_URL,
// }
// ();

const requestHandler = (request) => {
  //   request.headers["Authorization"] = `Bearer adsdf asddddddd `;
  return request;
};

const responseHandler = (response) => {
  console.log("==================> ", response);
};

const errorHandler = (error) => {
  console.log("==================> ", error);
};

customAxios.interceptors.request.use(
  (response) => requestHandler(response),
  (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default customAxios;
