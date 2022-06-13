import { Injectable } from '@nestjs/common';

import { InjectStripeClient } from '@golevelup/nestjs-stripe';
import Stripe from 'stripe';

@Injectable()
export class AppService {

  constructor(
    @InjectStripeClient()
    private readonly stripeClient: Stripe,
  ) { }

  getData(): { message: string } {
    return { message: 'Welcome to minrep-golevelup-nestjs-444!' };
  }
}
