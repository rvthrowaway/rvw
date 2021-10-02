import { createApplication } from 'graphql-modules';
import { ProductModule } from './product/product.module';

export const graphqlApplication = createApplication({
  modules: [ProductModule],
});
