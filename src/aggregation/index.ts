export class ShoppingCart {
  private readonly products: Product[] = [];

  insertProducts(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product);
    }
  }

  productsQuantity(): number {
    return this.products.length;
  }

  totalValue(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }
}

export class Product {
  constructor(
    public name: string,
    public price: number,
  ) {}
}

const shirt = new Product('Shirt', 49.9);
const pen = new Product('Pen', 1.9);
const shoes = new Product('Shoes', 154.9);

const shoppignCart = new ShoppingCart();
shoppignCart.insertProducts(shirt, pen, shoes);
console.log(shoppignCart.totalValue());
console.log(shoppignCart.productsQuantity());
