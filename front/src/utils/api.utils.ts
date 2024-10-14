"use server"

import { isAxiosError } from 'axios';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers'


async function getToken(): Promise<string|undefined|null> {
  const cookieStore = cookies();

  if (!cookieStore.has('token')) return null;

  return cookieStore.get('token')?.value;
}

async function errorHandler(error: unknown): Promise<any> {
  if (isAxiosError(error)) {
    return {
      data: null,
      message: error.response?.data.message
    };
  } else {
    return {
      data: null,
      message: 'Unknown Error'
    };
  }
}

export { getToken, errorHandler };
