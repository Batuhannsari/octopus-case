import axios from "axios";

export const getAllUsers = () => axios.get(`https://dummyjson.com/users`);

