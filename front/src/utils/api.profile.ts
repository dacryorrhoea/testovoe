'use server'

import axios, { AxiosResponse } from 'axios';
import { errorHandler, getToken } from './api.utils';
import { ResponseData, ProfileData } from '@/types/types';


async function getProfile(): Promise<ResponseData> {
  try {
    const { data } = await axios
    .get<AxiosResponse>(
      'http://localhost:5000/api/user/',
      { headers: { authorization: `bearer ${ await getToken() }` } } 
    )

    return {
      data: data,
      message: ''
    }
  } catch(error) {
    return await errorHandler(error);
  }
}

async function updateProfile({username, email}: ProfileData): Promise<ResponseData> {
  try {
    const { data } = await axios
    .patch<AxiosResponse>(
      'http://localhost:5000/api/user/',
      {username: username, email: email},
      { headers: { authorization: `bearer ${ await getToken() }` } } 
    )

    return {
      data: data,
      message: ''
    }
  } catch(error) {
    return await errorHandler(error);
  }
}

export { getProfile, updateProfile };
