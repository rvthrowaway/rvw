import { Injectable } from "graphql-modules";
import { getManager } from "typeorm";

import { Product } from "./product.entity";
// We need to import the Product entity,
// because we want to return from it in the provider.
@Injectable()
export class ProductProvider {
  async getAllProducts() {
    return await getManager()
      .find(Product);
  }

  async findFirstProduct() {
    const products = await getManager()
      .find(Product);
    return products[0];
  }

  async addProduct(product: Product) {
    return await getManager()
      .save(Product, product);
  }
}
