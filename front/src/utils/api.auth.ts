'use server'

import axios from 'axios';
import { cookies } from 'next/headers'
import { errorHandler, getToken } from './api.utils';
import { LoginData, RegisterData, ResponseData } from '@/types/types';


async function login({ email, password }: LoginData): Promise<ResponseData> {
  try {
    const { data } = await axios.post(
      'http://localhost:5000/api/auth/login', {
        email: email,
        password: password
      }
    );

    cookies().set('token' , data.token, { secure: true });

    return {
      data: null,
      message: ''
    }
  } catch(error) {
    return await errorHandler(error);
  }
}

async function register({ username, password, email }: RegisterData): Promise<ResponseData> {
  try {
    const { data } = await axios.post(
      'http://localhost:5000/api/auth/register', {
        username: username,
        email: email,
        password: password
      }
    );

    cookies().set('token' ,'' + data.token, { secure: true });

    return {
      data: null,
      message: ''
    };
  } catch(error) {
    return await errorHandler(error);
  }
}

async function logout() {
  cookies().delete('token')

  return ;
}

export { login, logout, register };
