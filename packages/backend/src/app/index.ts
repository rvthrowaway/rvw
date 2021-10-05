import { createApplication } from 'graphql-modules';

import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
// In app we bundle all our modules together. We can import them here.
export const graphqlApplication = createApplication({
  modules: [
    ProductModule,
    ReviewModule
  ],
});
