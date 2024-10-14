'use server'

import axios, { AxiosResponse } from 'axios';
import { cookies } from 'next/headers'
import { errorHandler, getToken } from './api.utils';
import { DealData, ResponseData, ProfileData } from '@/types/types';


async function getAllUsers(): Promise<ResponseData> {
  try {
    const { data } = await axios.get<AxiosResponse>(
      'http://localhost:5000/api/user/all/'
    );

    return {
      data: data,
      message: ''
    };
  } catch(error) {
    return await errorHandler(error);
  }
}

async function getProfileUser(id: string) {
  try {
    const { data } = await axios.get<any>(
      `http://localhost:5000/api/user/${id}`
    );

    return data;
  } catch(error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    } else {
      return 'Error';
    }
  }
}

async function profileDelete() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('token');

    const { data } = await axios.delete<any>(
      'http://localhost:5000/api/user/',
      { headers: {authorization: `bearer ${token?.value}`} } 
    );

    cookies().delete('token')

    return data;
  } catch(error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    } else {
      return 'Error';
    }
  }
}

async function getDeedsList() {
  try {
    const { data } = await axios.get<AxiosResponse>(
      'http://localhost:5000/api/deeds/',
      { headers: {authorization: `bearer ${ await getToken() }`} }
    );

    return {
      data: data,
      message: ''
    };
  } catch(error) {
    return await errorHandler(error);
  }
}

async function addDeed({ title, desc }: DealData) {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('token');

    const { data } = await axios.post<any>(
      'http://localhost:5000/api/deeds/',
      {
        title: title,
        desc: desc
      },
      { headers: { authorization: `bearer ${token?.value}` } }
    );

    console.log('pip')

    return data;
  } catch(error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    } else {
      return 'Error';
    }
  }
}

async function deleteDeed(id: number) {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('token');

    const { data } = await axios.delete<{data: any}>(
      `http://localhost:5000/api/deeds/${id}`,
      { headers: {authorization: `bearer ${token?.value}`} }
    );

    return data;
  } catch(error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    } else {
      return 'Error';
    }
  }
}

export { getDeedsList, getProfileUser, addDeed, deleteDeed, getAllUsers, profileDelete };
