import mongodb from 'mongodb';
import { DB_URL } from '../../config/config';
import makeAuthDB from './db';

const { MongoClient } = mongodb;
const url = DB_URL;
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

const todoDB = makeAuthDB({ makeDb });
export default todoDB;