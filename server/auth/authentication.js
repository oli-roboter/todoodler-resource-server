import axios from 'axios';
import { AUTH_API_PATH } from '../../config/config';

export default async function authRequest({ token, username }) {
  try {
    const auth = await axios.get(AUTH_API_PATH, {
      params: { username },
      headers: { 'x-todo-token': token },
    });
    /*
    {
      success: true,
      error: null,
      message: 'Authorized',
      token: 'DTL7A9VLZUwQQQMM9ojjrIMHllg3nqenCaqI8I8Jhg0'
      //needs to have permission groups: post:user, post:admin, delete:user, delete:admin, etc
    }
    */
    return auth.data;
  } catch (e) {
    // console.error('AUTH ERROR:', data, status);
    const { data, status } = e.response;
    return { ...data, status };
  }
}
