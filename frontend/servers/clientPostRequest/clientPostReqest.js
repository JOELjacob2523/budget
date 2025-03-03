import axios from "axios";
const URL = "http://localhost:8000";

export const createClient = async (formData) => {
  try {
    const response = await axios.post(`${URL}/signup`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      console.error(`Error creating client ${response.data}`);
    }
  } catch (error) {
    console.error("Error creating client:", error);
  }
};
