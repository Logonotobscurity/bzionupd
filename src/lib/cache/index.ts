
import { createClient } from 'redis';

const redisClient = createClient({
  // Your Redis configuration
});

redisClient.on('error', (err) => console.log('Redis Client Error', err));

await redisClient.connect();

export const getCache = async (key: string) => {
  return await redisClient.get(key);
};

export const setCache = async (key: string, value: string, options?: any) => {
  return await redisClient.set(key, value, options);
};
