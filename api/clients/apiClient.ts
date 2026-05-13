export class ApiClient {

  constructor(
    private baseURL: string,
    private token?: string
  ) {}

  private getHeaders() {

    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'User-Agent': 'qa-automation',

      ...(this.token && {
        Authorization: `Bearer ${this.token}`
      })
    };
  }

  get(
    endpoint: string,
    qs?: Record<string, string | number>
  ) {

    return cy.request({
      method: 'GET',
      url: `${this.baseURL}${endpoint}`,
      qs,
      headers: this.getHeaders(),
      failOnStatusCode: false
    });
  }

  post<T = object>(
    endpoint: string,
    body?: T
  ) {

    return cy.request({
      method: 'POST',
      url: `${this.baseURL}${endpoint}`,
      body: body as Cypress.RequestBody,
      headers: this.getHeaders(),
      failOnStatusCode: false
    });
  }

  put<T = object>(
    endpoint: string,
    body?: T
  ) {

    return cy.request({
      method: 'PUT',
      url: `${this.baseURL}${endpoint}`,
      body: body as Cypress.RequestBody,
      headers: this.getHeaders(),
      failOnStatusCode: false
    });
  }

  delete(endpoint: string) {

    return cy.request({
      method: 'DELETE',
      url: `${this.baseURL}${endpoint}`,
      headers: this.getHeaders(),
      failOnStatusCode: false
    });
  }
}