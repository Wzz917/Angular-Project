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
import { HttpComponent } from './http/http.component';
import { HttpService } from './http/http.service';
import { HeaderComponent } from './header/header.component';
import { TestPipe } from './shared/pipes/test.pipe';
import { TestDirective } from './shared/directives/test.directive';

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
    TaskListComponent,
    HttpComponent,
    HeaderComponent,
    TestPipe,
    TestDirective
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
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
