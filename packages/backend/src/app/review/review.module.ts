import { createModule, gql } from "graphql-modules";
import {ReviewProvider} from "./review.provider";

export const ReviewModule = createModule({
  id: "review",
  dirname: __dirname,
  providers: [ReviewProvider],
  typeDefs: gql`
    type Review {
      text: String
      rating: Int
      product: Product
    }
    extend type Query {
      reviews: [Review]
      findFirstReview: Review
    }
    extend type Mutation {
      addReview(text: String, rating: Int): Review
    }
  `,
  resolvers: {
    Query: {
      reviews(_root: any, _args: any, { injector }: GraphQLModules.Context) {
        return injector.get(ReviewProvider).getAllReviews();
      },
      findFirstReview(_root: any, _args: any, { injector }: GraphQLModules.Context) {
        return injector.get(ReviewProvider).findFirstReview();
      },
    },
    Mutation: {
      addReview(_root: any, args: any, { injector }: GraphQLModules.Context) {
        return injector.get(ReviewProvider).addReview(args);
      },
    },
  },
});
