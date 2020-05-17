import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Product } from '../shared/models/product';
import { Store } from '@ngrx/store';
import * as ProductListActions from './store/product-list.actions';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  id = '';
  name = '';
  description = '';
  // p = null;
  product:Product;
  @Output() addclicked = new EventEmitter<Product>();


  constructor(private store : Store<{productList: {products:Product[]}}>) {
    
  }

  ngOnInit() {
  }

  changeID(inputID:string):void {
    console.log(inputID);
    this.id = inputID;
  }

  changeName(inputName:string):void {
    console.log(inputName);
    this.name = inputName;
  }
  changeDescription(inputDescription:string):void {
    console.log(inputDescription);
    this.description = inputDescription;
  }


  pressButton():void {
    // console.log("testtest");
    var newProduct = new Product(+this.id, this.name, this.description);
    this.product = newProduct;
    this.addclicked.emit(this.product);
    this.store.dispatch(new ProductListActions.AddProduct(this.product));
    
  }
}
