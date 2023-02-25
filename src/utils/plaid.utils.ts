import {axiosClient} from "./axios.utils"

export const createLinkToken = async (): Promise<string> => {

  const res = await axiosClient.post("/v1/item/public-token");
  return res.data.linkToken;
}

export const createPrivateAccessToken = async (publicToken: string) => {
  console.log("publicToken", publicToken)
  const res = await axiosClient.post("/v1/link/private-access-token", { publicToken: publicToken })

  console.log(res)
}