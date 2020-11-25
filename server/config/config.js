import dotenv from 'dotenv';

dotenv.config();

const {
  NODE_ENV,
  SERVER_PORT,
  MONGO_ATLAS_URL,
  AUTH_BACKEND,
} = process.env;

const MONGO_DB = MONGO_ATLAS_URL;
const PORT = SERVER_PORT;

export {
  NODE_ENV,
  PORT,
  MONGO_DB,
  AUTH_BACKEND,
};
