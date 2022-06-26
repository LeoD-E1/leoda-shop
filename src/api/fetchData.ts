const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const fetchData = async (endpoint: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
