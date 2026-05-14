import { AuthService } from '../services/auth.service';
import { AuthFactory } from '../factories/auth.factory';
import { AuthSchema } from '../schemas/auth.schema';

describe('Auth API', () => {

  const authService = new AuthService();

  it('POST - login válido', () => {

    authService
      .login(AuthFactory.validUser())
      .then((response) => {

        expect(response.status).to.eq(200);

        expect(
          response.headers['content-type']
        ).to.include('application/json');

        AuthSchema.parse(response.body);
      });
  });

  it('POST - login inválido', () => {

    authService
      .login(AuthFactory.invalidUser())
      .then((response) => {

        expect([400, 401])
          .to.include(response.status);

        expect(
          response.headers['content-type']
        ).to.include('application/json');
      });
  });
});