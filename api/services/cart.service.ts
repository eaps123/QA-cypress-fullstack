import env from '../../config/env';
import { ApiClient } from '../clients/api.client';

export class CartService {

  private client: ApiClient;

  constructor() {

    this.client = new ApiClient(
      env.api.dummy
    );
  }

  createCart(payload: object) {

    return this.client.post(
      '/carts/add',
      payload
    );
  }

  getCart(id: number) {

    return this.client.get(
      `/carts/${id}`
    );
  }

  updateCart(
    id: number,
    payload: object
  ) {

    return this.client.put(
      `/carts/${id}`,
      payload
    );
  }

  deleteCart(id: number) {

    return this.client.delete(
      `/carts/${id}`
    );
  }
}