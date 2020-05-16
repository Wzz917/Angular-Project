import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list.component';
import { BoosterPipe } from './shared/pipes/booster.pipe';
import { ColorChangerDirective } from './shared/directives/color-changer.directive';
import { AddProductComponent } from './product/add-product.component';
import { PostListComponent } from './post/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    BoosterPipe,
    ColorChangerDirective,
    AddProductComponent,
    PostListComponent
  ],
  exports: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
