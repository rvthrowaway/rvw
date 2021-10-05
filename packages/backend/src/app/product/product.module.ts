import { createModule, gql } from "graphql-modules";
import {ProductProvider} from "./product.provider";

export const ProductModule = createModule({
  id: "product",
  dirname: __dirname,
  providers: [ProductProvider],
  typeDefs: gql`
    type Product {
      title: String
    }
    type Query {
      products: [Product]
      findFirst: Product
    }
    type Mutation {
      addProduct(title: String): Product
    }
  `,
  resolvers: {
    Query: {
      products(_root: any, _args: any, { injector }: GraphQLModules.Context) {
        return injector.get(ProductProvider).getAllProducts();
      },
      findFirst(_root: any, _args: any, { injector }: GraphQLModules.Context) {
        return injector.get(ProductProvider).findFirstProduct();
      },
    },
    Mutation: {
      addProduct(_root: any, args: any, { injector }: GraphQLModules.Context) {
        return injector.get(ProductProvider).addProduct(args);
      },
    },
  },
});
