import { TextAst } from '@angular/compiler';
import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Iphone X',
      description: 'This is Iphone X',
      image: '/assets/iphonexBlack.jpg',
      price: 5.99,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Iphone XS Max',
      description: 'This is Iphone XS Max',
      image: '/assets/iphoneXSBlack.png',
      price: 9.99,
      quantity: 2,
    },
  ];

  numberItem: number = 4;
  subTotal: number = 21.97;
  tax: number = 5;
  total: number = this.tax + this.subTotal;

  // updateQuantity(element){
  //   var index = this.products.findIndex(function (product) {

  //   });
  // }

  removeProduct(productId: number) {
    var index = this.products.findIndex(function (product) {
      return product.id === productId;
    });

    this.products.splice(index, 1);

    var numberItem = 0;
    var subTotal = 0;
    this.products.forEach(product => {
      numberItem += product.quantity;
      subTotal += product.price * product.quantity;
    });

    this.numberItem = numberItem;
    this.subTotal = subTotal;
    this.total = subTotal + this.tax;
  }
}
