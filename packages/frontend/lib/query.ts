import { initQueryClient } from "@ts-rest/react-query";
import { contract } from "@cakaybox/common";

export const client = initQueryClient(contract, {
  // baseUrl: "https://tk2-248-33651.vs.sakura.ne.jp/api",
  baseUrl: "http://localhost:3001",
  baseHeaders: {},
});
