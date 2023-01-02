import axios from "axios";

export const getCandidates = async () => {
  try {
    const response = await axios.get("http://localhost:5000/candidates");
    const candidates = response.data;
    return candidates;
  } catch (error) {
    console.error(error);
  }
};
