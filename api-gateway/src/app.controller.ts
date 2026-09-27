import { Controller, Get, Post, Body, Sse, MessageEvent } from '@nestjs/common';
import { AppService } from './app.service.js';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Controller()
export class AppController {
  // A simple Event Emitter for SSE (Server-Sent Events)
  private events = new Subject<any>();

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // 1. Receive calculation request
  @Post('calculate')
  async requestCalculation(@Body() payload: { prompt: string; type: 'ai' | 'standard' }) {
    const jobId = Math.random().toString(36).substring(7);
    
    // Here we would push the job to RabbitMQ:
    // await this.amqpConnection.publish('calc_exchange', 'ai_tasks', { jobId, ...payload });

    // Simulate receiving a message back from RabbitMQ after 2 seconds
    setTimeout(() => {
      this.events.next({
        jobId,
        result: payload.type === 'ai' ? '2x * sin(x) + x^2 * cos(x)' : '42',
        steps: ['Parsed equation', 'Computed result'],
        status: 'COMPLETED'
      });
    }, 2000);

    return { jobId, status: 'QUEUED' };
  }

  // 2. Stream results back to the client via SSE
  @Sse('stream')
  streamResults(): Observable<MessageEvent> {
    return this.events.asObservable().pipe(
      map((data) => ({ data } as MessageEvent)),
    );
  }
}
