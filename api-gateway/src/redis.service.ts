import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { createClient, RedisClientType } from 'redis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private client: RedisClientType;

  constructor() {
    // Connect to the Redis instance defined in docker-compose.yml
    this.client = createClient({
      url: process.env.REDIS_URL || 'redis://localhost:6379'
    });

    this.client.on('error', (err: any) => console.error('Redis Client Error', err));
  }

  async onModuleInit() {
    await this.client.connect();
    console.log('Connected to Redis Cache');
  }

  async onModuleDestroy() {
    await this.client.disconnect();
  }

  // Set a cached computation result (expires in 24 hours)
  async setCachedResult(query: string, result: string): Promise<void> {
    const key = `calc:${Buffer.from(query).toString('base64')}`;
    await this.client.setEx(key, 86400, result);
  }

  // Retrieve a cached result
  async getCachedResult(query: string): Promise<string | null> {
    const key = `calc:${Buffer.from(query).toString('base64')}`;
    return await this.client.get(key);
  }
}
