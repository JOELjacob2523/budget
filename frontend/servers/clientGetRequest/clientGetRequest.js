import axios from "axios";
const URL = "http://localhost:8000/client_get";

// const axiosInstance = axios.create({
//   baseURL: URL,
//   withCredentials: true,
// });

export const checkAuth = async () => {
  try {
    const response = await axiosInstance.get(`${URL}/check_auth`, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err;
  }
};

//get client info
export const getClientInfo = async (id) => {
  try {
    const response = await axios.get(
      `${URL}/get_client_info`,
      { params: { client_id: id } }
      // { withCredentials: true }
    );

    const data = response.data;
    return data;
  } catch (err) {
    console.error("Error:", err.message);
    throw err;
  }
};

export const logout = async () => {
  try {
    const response = await axios.get(`${URL}/logout`, {
      withCredentials: true,
    });
    if (response.status === 200) {
      console.log("Successfully logged out");
    }
  } catch (err) {
    console.error("Error logging out:", err);
  }
};
