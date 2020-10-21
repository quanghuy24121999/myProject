import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products = [
    {
      name: 'Iphone X',
      description: 'This is Iphone X',
      image: '/assets/iphonexBlack.jpg',
      price: 5.99,
      quantity: 2
    },
    {
      name: 'Iphone XS Max',
      description: 'This is Iphone XS Max',
      image: '/assets/iphoneXSBlack.png',
      price: 9.99,
      quantity: 2
    },
    {
      name: 'Iphone X',
      description: 'This is Iphone X',
      image: '/assets/iphonexBlack.jpg',
      price: 5.99,
      quantity: 2
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
