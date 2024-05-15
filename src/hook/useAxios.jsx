import axios from "axios";


const axiosSecure = axios.create({
    withCredentials: true,
    baseURL: import.meta.env.VITE_API_URL
})
const useAxios = () => {
    return axiosSecure
};

export default useAxios;

// can't complete for the time