import { Injectable } from 'graphql-modules';

export interface Product {
  title: string;
}

@Injectable()
export class ProductsProvider {
  products: Product[] = [{ title:"The Minimalist Entrepreneur" }];


  getProducts() {
    return this.products;
  }

  addProduct(product: Product) {
    this.products.push(product);
    return product;
  }
}
