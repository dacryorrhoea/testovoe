'use server'

import axios from 'axios';
import { cookies } from 'next/headers'

type LoginData = {
  username: string, 
  password: string
}

type RegisterData = {
  username: string,
  email: string,
  password: string
}

type DealData = {
  title: string,
  desc: string
}

async function getAllUsers() {
  try {
    const { data } = await axios.get<any>(
      'http://localhost:5000/api/user/all/'
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

async function profile() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('token');

    const { data } = await axios.get<any>(
      'http://localhost:5000/api/user/',
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

async function profileUpdate({username, email}: {username: string; email: string}) {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('token');

    const { data } = await axios.patch<any>(
      'http://localhost:5000/api/user/',
      {username: username, email: email},
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

async function login({ username, password }: LoginData) {
  try {
    const { data } = await axios.post<{token: string}>(
      'http://localhost:5000/api/auth/login', {
        username: username,
        password: password
      }
    );
    cookies().set('token' ,'' + data.token, { secure: true });

    return 0;
  } catch(error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    } else {
      return 'Error';
    }
  }
}

async function register({ username, password, email }: RegisterData) {
  try {
    const { data } = await axios.post<{token: string}>(
      'http://localhost:5000/api/auth/register', {
        username: username,
        email: email,
        password: password
      }
    );
    cookies().set('token' ,'' + data.token, { secure: true });

    return 0;
  } catch(error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    } else {
      return 'Error';
    }
  }
}

async function logout() {
  cookies().delete('token')

  return 1;
}

async function getDeedsList() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('token');

    const { data } = await axios.get<any>(
      'http://localhost:5000/api/deeds/',
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

export { login, register, logout, getDeedsList, getProfileUser, addDeed, deleteDeed, getAllUsers, profile, profileUpdate, profileDelete };
