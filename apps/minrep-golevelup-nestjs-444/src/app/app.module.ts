import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { StripeModule } from '@golevelup/nestjs-stripe';

@Module({
  imports: [
    StripeModule.forRoot(
      StripeModule,
      {
        apiKey: 'sk_test_12345',
        webhookConfig: {
          stripeWebhookSecret: 'secret'
        }
      }
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
