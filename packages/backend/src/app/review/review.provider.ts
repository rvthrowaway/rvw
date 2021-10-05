import { Injectable } from "graphql-modules";
import { getManager } from "typeorm";

import { Review } from "./review.entity";

@Injectable()
export class ReviewProvider {
  async getAllReviews() {
    return await getManager()
      .find(Review);
  }

  async findFirstReview() {
    const reviews = await getManager()
      .find(Review);
    return reviews[0];
  }

  async addReview(review: Review) {
    return await getManager()
      .save(Review, review);
  }
}
