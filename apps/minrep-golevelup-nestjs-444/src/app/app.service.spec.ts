import { Test } from '@nestjs/testing';

import { AppService } from './app.service';
import { StripeModule } from '@golevelup/nestjs-stripe';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [
        AppService, 
        { provide: StripeModule, useValue: {} }
      ],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return "Welcome to minrep-golevelup-nestjs-444!"', () => {
      expect(service.getData()).toEqual({
        message: 'Welcome to minrep-golevelup-nestjs-444!',
      });
    });
  });
});
