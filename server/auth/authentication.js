import axios from 'axios';
import { AUTH_API_PATH } from '../config/config';

export default async function authRequest({ token, username }) {
  try {
    const auth = await axios.get(AUTH_API_PATH, {
      params: { username },
      headers: { 'x-todo-token': token },
    });

    return auth.data;
  } catch (e) {
    // console.error('AUTH ERROR:', data, status);
    const { data, status } = e.response;
    return { ...data, status };
  }
}
