import axios from "axios";
const URL = "http://localhost:8000/client_post";

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

//confirm user info
export const clientLogin = async (email, password) => {
  try {
    const response = await axios.post(
      `${URL}/login`,
      { email, password },
      { withCredentials: true }
    );

    if (response.status === 200) {
      return response;
    } else {
      console.log(`Error inserting! ${response.data}`);
    }
  } catch (err) {
    console.error("Error:", err.message);
    throw err.response ? err.response.data.error : err.message;
  }
};
