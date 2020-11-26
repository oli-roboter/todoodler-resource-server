import dotenv from 'dotenv';

dotenv.config();

const {
  NODE_ENV,
  TODOODLER_PORT,
  MONGO_ATLAS_URL,
  AUTH_BACKEND,
} = process.env;

const MONGO_DB = MONGO_ATLAS_URL;
const PORT = TODOODLER_PORT;

export {
  NODE_ENV,
  PORT,
  MONGO_DB,
  AUTH_BACKEND,
};
