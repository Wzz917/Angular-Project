import { Component, OnInit, ViewChild, ViewChildren, ElementRef, QueryList, AfterViewInit, OnDestroy } from '@angular/core';
import { Product } from '../shared/models/product';
import { ProductComponent } from './product.component';
import { AddProductComponent } from './add-product.component';
import { interval, Observable, Subscription } from 'rxjs';
import { takeWhile, filter } from 'rxjs/operators'
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit, OnDestroy {

  productList: Array<Product> = [];
  counter: any;
  timer$: Observable<number>;
  subscribe: Subscription;
  products: Observable<{products: Product[]}>;
  // @ViewChild('p1')
  private productComponent: ProductComponent;

 
  private addComponent: AddProductComponent;
  @ViewChildren(AddProductComponent) prod: AddProductComponent;
  isComplete: any;
  // @ViewChildren(ProductComponent) prodList: QueryList<ProductComponent>;
  // @ViewChildren(ProductComponent) prod: Product;
  // @ViewChild('txtBox')
  // private textBox: ElementRef;
  
  constructor(private store: Store<{productList: {products:Product[]}}>) { }

  ngOnInit() {
    this.products = this.store.select('productList');

    this.productList = [new Product(1, 'notebook', 'good good good good good good'), new Product(2, 'pen', 'bad bad bad bad bad bad bad'),
    new Product(3, 'pencil', 'ok ok ok ok ok ok ok okokokok'), new Product(4, 'eraser','just so so 12345678910111213141516171819')];

    const source = interval(1000);
    this.subscribe = source.pipe(filter(val => val%2 === 0),
    takeWhile(() => this.isComplete)).subscribe(val =>  {
      console.log(val);
      this.counter = val;
    }, () => {}, () => console.log('completed!') );

  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    // console.log(this.productComponent.product);
    // console.log(this.textBox.nativeElement.value);
    console.log(this.prod.name);
    // this.prodList.forEach(prod => console.log(prod.product));
    
  }

  logPickedProduct(product: Product) {
    console.log("run");
    console.log(product);
  }

  logSubmit(product: Product) {
    console.log("test");
    console.log(product);
    this.productList.push(product);
    
  }

  ngOnDestroy() {
    this.isComplete = false;
    this.subscribe.unsubscribe();
  }

}


/* 
  Add new property "description" to the Product class
  "This is the description for the product"
  1) create custom pipe which will shorten this description to first 20 letters followed by ...
  Id     Name        Descriptuion
  1       P1             D1
  2       P2             This is the descript...

  2) Create one component 'add-product' with fields for id, name and description, and have a "add" button
  to add this new product to the list of product that you have in the parent "product list" component



*/