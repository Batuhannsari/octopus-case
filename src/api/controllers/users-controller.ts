import axios from "axios";

export const getUsersRequest = () => axios.get(`https://dummyjson.com/users`);

