import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Product[];

  private imgUrl = "http://placehold.it/320x150";

  constructor(private productService: ProductService) { }

  // 组件声明周期中的钩子，在组件实例化后调用一次
  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}