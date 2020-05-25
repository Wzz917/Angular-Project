import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from "@ngrx/store";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list.component';
import { BoosterPipe } from './shared/pipes/booster.pipe';
import { ColorChangerDirective } from './shared/directives/color-changer.directive';
import { AddProductComponent } from './product/add-product.component';
import { PostListComponent } from './post/post-list.component';
import { UserTemplateDrivenComponent } from './user/user-template-driven.component';
import { UserReactiveComponent } from './user/user-reactive.component';
import { productListReducer } from './product/store/product-list.reducer';
import { TaskListComponent } from './task/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    BoosterPipe,
    ColorChangerDirective,
    AddProductComponent,
    PostListComponent,
    UserTemplateDrivenComponent,
    UserReactiveComponent,
    TaskListComponent
  ],
  exports: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({productList: productListReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
