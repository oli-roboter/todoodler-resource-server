import mongodb from 'mongodb';
import makeTodoDB from './db';

const { MongoClient } = mongodb;
const dbName = 'todo';
const client = new MongoClient(process.env.DB_URL,
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
