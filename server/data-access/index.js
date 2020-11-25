import mongodb from 'mongodb';
import dotenv from 'dotenv';
import makeTodoDB from './db';

dotenv.config();

const { MongoClient } = mongodb;
const dbName = 'todo';
const uri = process.env.MONGO_ATLAS_URL;

const client = new MongoClient(uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

export async function makeDb() {
  if (!client.isConnected()) {
    await client.connect();
  }
  return client.db(dbName);
}

const todoDB = makeTodoDB({ makeDb });
export default todoDB;
