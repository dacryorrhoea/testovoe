import axios from 'axios';

type LoginData = {
  username: string, 
  password: string
}

type RegisterData = {
  username: string,
  email: string,
  password: string
}

async function login({ username, password }: LoginData) {
  const { data, status } = await axios.post<LoginData>(
    'http://localhost:5000/api/auth/login', {
      username: username,
      password: password
    }
  );
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

async function getDealsList() {
  const { data, status } = await axios.get('http://localhost:5000/api/deals');
  return data;
}

export { login, register, getDealsList };
