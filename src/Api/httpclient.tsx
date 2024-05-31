import axios from "axios";

const deploymentMode = {
  production: false,
};
// -------------------------------------------------------------------------------
// ** actions end point
const DEV_MAIN = "http://localhost:8080/";
const PRODUCTION_MAIN = "";
// ** =>
export default axios.create({
  baseURL: deploymentMode?.production ? PRODUCTION_MAIN : DEV_MAIN,
});