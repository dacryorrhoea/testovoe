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
  name: string,
  desc: string
}

async function login({ username, password }: LoginData) {
  const { data, status } = await axios.post<LoginData>(
    'http://localhost:5000/api/auth/login', {
      username: username,
      password: password
    }
  );

  cookies().set('token' ,'' + data, { secure: true })

  return data;
}

async function register({ username, password, email }: RegisterData) {
  const { data, status } = await axios.post<RegisterData>(
    'http://localhost:5000/api/auth/register', {
      username: username,
      email: email,
      password: password
    }
  );
  return data;
}

async function logout() {
  cookies().delete('token')

  return 1;
}

async function getDealsList() {
  const { data, status } = await axios.get('http://localhost:5000/api/deals');
  return data;
}

async function addDeal({ name, desc }: DealData) {
  const { data, status } = await axios.post<RegisterData>(
    'http://localhost:5000/api/deals/', {
      name: name,
      desc: desc
    }
  );
  return data;
}

async function deleteDeal(id: number) {
  const { data, status } = await axios.delete(`http://localhost:5000/api/deals/${id}`);
  return data;
}

export { login, register, logout, getDealsList, addDeal, deleteDeal };
