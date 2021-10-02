import { createModule, gql } from 'graphql-modules';
import { ProductsProvider } from './product.provider';

export const ProductModule = createModule({
  id: 'product',
  dirname: __dirname,
  providers: [ProductsProvider],
  typeDefs: gql`
    type Query {
      products: [Product]
    }

    type Mutation {
      addProduct(title: String, ): Product
    }

    type Product {
      title: String
      }
  `,
  resolvers: {
    Query: {
      products(_root: any, _args: any, { injector }: GraphQLModules.Context) {
        return injector.get(ProductsProvider).getProducts();
      },
    },
    Mutation: {
      addProduct(_root: any, args: any, { injector }: GraphQLModules.Context) {
        return injector.get(ProductsProvider).addProduct(args);
      },
    },
  },
});
