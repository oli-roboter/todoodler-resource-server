import dotenv from 'dotenv';

dotenv.config();

const {
  PORT,
  NODE_ENV,
  DB_URL,
  API_ROOT,
  AUTH_API_PATH,
} = process.env;
const TODO_DB = process.env.DB_NAME;
export {
  PORT,
  NODE_ENV,
  API_ROOT,
  DB_URL,
  TODO_DB,
  AUTH_API_PATH,
};
