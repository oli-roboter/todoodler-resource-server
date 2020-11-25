import mongodb from 'mongodb';
import { MONGO_DB } from '../config/config';
import makeTodoDB from './db';

const { MongoClient } = mongodb;
const url = MONGO_DB;
const dbName = 'todo';
const client = new MongoClient(url,
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
