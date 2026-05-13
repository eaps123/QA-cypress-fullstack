import dev from './dev';
import qa from './qa';
import prd from './prd';

const environments = {
  dev,
  qa,
  prd
};

const currentEnv =
  Cypress.env('ENV') || 'qa';

export default environments[
  currentEnv as keyof typeof environments
];