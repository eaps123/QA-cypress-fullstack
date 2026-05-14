import { CepService } from '../services/cep.service';
import { CepSchema } from '../schemas/cep.schema';

describe('CEP API', () => {

  const cepService = new CepService();

  it('GET - deve buscar CEP válido', () => {

    cepService
      .getCep('01001000')
      .then((response) => {

        expect(response.status)
          .to.eq(200);

        expect(
          response.headers['content-type']
        ).to.include('application/json');

        const parsed =
          CepSchema.safeParse(response.body);

        expect(parsed.success)
          .to.eq(true);
      });
  });

  it('GET - CEP inválido', () => {

    cepService
      .getCep('000000000')
      .then((response) => {

        expect([200, 400, 404])
          .to.include(response.status);
      });
  });
});