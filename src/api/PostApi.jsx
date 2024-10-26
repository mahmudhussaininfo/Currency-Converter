import axios from "axios";

const api = axios.create({
  baseURL: "https://v6.exchangerate-api.com/v6/6e99b9a0c7cdad58734134a3",
});

export const exchangeRate = (fromCurr, toCurr, amount) => {
  return api.get(`/pair/${fromCurr}/${toCurr}/${amount}`);
};
