import axios from 'axios'

const httpAPI = axios.create({
     baseURL: 'http://localhost:4000',
     withCredentials: true,
     headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
     }
})

export const sendOTP = async (phoneNumber) => {
     return await httpAPI.post('/api/otp-send', phoneNumber);
}

export const verifyOTP = async (data) => {
     return await httpAPI.post('/api/otp-verify', data);
}

export const activate = async (data) => {
     return await httpAPI.post('/api/activate', data);
}

export const logout = async () => {
     return await httpAPI.post('/api/logout');
}

export default httpAPI