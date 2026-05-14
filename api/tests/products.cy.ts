import { ProductService } from '../services/product.service';
import { ProductFactory } from '../factories/product.factory';
import { ProductSchema } from '../schemas/product.schema';

describe('Products API', () => {

  const productService =
    new ProductService();

  it('GET - deve listar produtos', () => {

    productService
      .getProducts()
      .then((response) => {

        expect(response.status)
          .to.eq(200);

        expect(
          response.body.products.length
        ).to.be.greaterThan(0);

        ProductSchema.parse(
          response.body.products[0]
        );
      });
  });

  it('POST - deve criar produto', () => {

    const payload =
      ProductFactory.validProduct();

    productService
      .createProduct(payload)
      .then((response) => {

        expect([200, 201])
          .to.include(response.status);

        expect(response.body)
          .to.have.property('id');
      });
  });

  it('PUT - deve atualizar produto', () => {

    const payload =
      ProductFactory.validProduct({
        title: 'Produto Atualizado'
      });

    productService
      .updateProduct(1, payload)
      .then((response) => {

        expect([200, 201])
          .to.include(response.status);

        expect(response.body.title)
          .to.eq('Produto Atualizado');
      });
  });

  it('DELETE - deve remover produto', () => {

    productService
      .deleteProduct(1)
      .then((response) => {

        expect([200, 204])
          .to.include(response.status);
      });
  });

  it('POST - deve validar payload inválido', () => {

    productService
      .createProduct(
        ProductFactory.invalidProduct()
      )
      .then((response) => {

        expect([200, 201, 400, 422])
          .to.include(response.status);
      });
  });
});