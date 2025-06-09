import { Redis } from '@upstash/redis';

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const setKey = async (key: string, value: string) => {
    await redis.set(key, value);
};

const getKey = async (key: string) => {
    return await redis.get(key);
};

const deleteKey = async (key: string) => {
    await redis.del(key);
};

export { setKey, getKey, deleteKey, redis };
