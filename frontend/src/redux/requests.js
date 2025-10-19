import { FULL_URL } from "../constants";

export const request_get = async (url) => {
  const fullURL = `${FULL_URL}/${url}`;
  try {
    const response = await fetch(fullURL, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("DATA FROM API: ", data);
    return data;
  } catch (error) {
    // Logger here for signalize us about backend API shutdown
    return {
      code: 500,
      message: "Server is shutdown!",
    };
  }
};
