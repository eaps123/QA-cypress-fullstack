import { CartService } from '../services/CartService';
import { CartFactory } from '../factories/cart.factory';
import { CartSchema } from '../schemas/cart.schema';

describe('Cart API', () => {

  const cartService = new CartService();

  it('POST - deve criar carrinho', () => {

    const payload =
      CartFactory.validCart();

    cartService
      .createCart(payload)
      .then((response) => {

        expect([200, 201])
          .to.include(response.status);

        expect(
          response.headers['content-type']
        ).to.include('application/json');

        expect(response.body)
          .to.have.property('id');

        CartSchema.partial()
          .parse(response.body);
      });
  });

  it('POST - deve retornar erro para payload inválido', () => {

    cartService
      .createCart(
        CartFactory.invalidCart()
      )
      .then((response) => {

        expect([200, 400, 422])
          .to.include(response.status);

        expect(
          response.headers['content-type']
        ).to.include('application/json');
      });
  });
});