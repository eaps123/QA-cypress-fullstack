import env from '../../config/env';
import { ApiClient } from '../clients/api.client';

export class AuthService {

  private client: ApiClient;

  constructor() {

    this.client = new ApiClient(
      env.api.dummy
    );
  }

  login(payload: object) {

    return this.client.post(
      '/auth/login',
      payload
    );
  }

  register(payload: object) {

    return this.client.post(
      '/users/add',
      payload
    );
  }
}