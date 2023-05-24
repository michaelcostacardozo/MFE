import Cookies from "js-cookie";

import { HEADLESS_COOKIE_TOKEN } from "@/constants/index";

interface FetchAPIProps {
  path: string;
  body?: string;
  method?: string;
  options?: {
    ignoreTokenValidation?: boolean;
  };
}

export function getServerUrl() {
  return `${process.env.NEXT_PUBLIC_BFFS_URL || "http://localhost:3006/dev"}`;
}

export const fetchAPI = async ({
  path,
  options,
  method,
  body,
}: FetchAPIProps) => {  
    const mergedOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      method: method,
      body: body,
      ...options,
    };

    const requestUrl = `${getServerUrl()}${path}`;
    const response = await fetch(requestUrl, mergedOptions);

    if (!response.ok) {      
      throw new Error(`An error occurred please try again`);
    }
    const data = await response.json();
    return data;
};
