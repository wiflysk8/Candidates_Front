import axios from "axios";

export const onDelete = async (_id) => {
  try {
    await axios.delete(`http://localhost:5000/candidates/${_id}`);
  } catch (error) {
    console.error(error);
  }
};
