import { io } from 'socket.io-client';


const URL = 'https://1430-2409-4088-9d0a-e2a0-643e-2a52-dafc-ebf6.ngrok-free.app'

export const socket = io(URL,{
    withCredentials: true,
    });