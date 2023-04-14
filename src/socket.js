import { io } from 'socket.io-client';
import {url} from './Constant/Url'


// const URL = 'https://8034-117-242-153-226.ngrok-free.app/'

export const socket = io(url,{
    withCredentials: true,
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax : 5000,
    reconnectionAttempts: Infinity
    });