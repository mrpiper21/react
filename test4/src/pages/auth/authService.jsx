import axios from 'axios';
import { config } from '../utils/axiosconfig'
import { base_url } from '../utils/basUrl';

const login = async (user) => {
    const response = await axios.post(`${base_url}user/admin-login`)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data;
}

const getAllEvents = async () => {
    const response = await axios.get(`${base_url}events`, config);

    return response.data;
}

const getEvent = async (id) => {
    const response = await axios.post(
        `${base_url}events/${id}`, '', config
    );

    return response.data;
}

const authService = {
    login,
    getAllEvents,
    getEvent,
}

export default authService;