import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() products;
  @Output() onRemoveProduct = new EventEmitter;
  @Output() onUpdateQuantity = new EventEmitter;

  constructor() {}

  ngOnInit(): void {}

  removeProduct(productId: number): void {
    this.onRemoveProduct.emit(productId);
  }

  updateQuantity(productId: number, element): void{
    console.log(element.value);
  }
}
