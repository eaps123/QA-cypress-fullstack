import env from '../../config/env';
import { ApiClient } from '../clients/apiClient';

export class ProductService {

  private client: ApiClient;

  constructor() {

    this.client = new ApiClient(
      env.api.dummy
    );
  }

  getProducts() {

    return this.client.get(
      '/products'
    );
  }

  getProductById(id: number) {

    return this.client.get(
      `/products/${id}`
    );
  }

  createProduct(payload: object) {

    return this.client.post(
      '/products/add',
      payload
    );
  }

  updateProduct(
    id: number,
    payload: object
  ) {

    return this.client.put(
      `/products/${id}`,
      payload
    );
  }

  deleteProduct(id: number) {

    return this.client.delete(
      `/products/${id}`
    );
  }
}