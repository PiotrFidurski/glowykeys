import { connect } from 'mongoose';

const username = process.env.DB_USER;
const password = process.env.DB_PWD;

const MONGODB_URI =
  process.env.NODE_ENV === 'development' ? `mongodb://${username}:${password}@localhost:27017/glowykeys` : ``;

if (!username || !password) {
  throw new Error('Please make sure to define DB_USER and DB_PWD environment variables inside .env.local');
}

interface CachedConnection {
  connection: typeof import('mongoose');
  promise: Promise<typeof import('mongoose')>;
}

let cached: CachedConnection = global.mongoose;

if (!cached) {
  // eslint-disable-next-line no-multi-assign
  cached = global.mongoose = { connection: null, promise: null };
}

async function dbConnect() {
  if (cached.connection) {
    return cached.connection;
  }

  if (!cached.promise) {
    const config = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    };

    cached.promise = connect(MONGODB_URI, config).then((mongoose) => mongoose);
  }

  cached.connection = await cached.promise;

  return cached.connection;
}

export default dbConnect;
