import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post/post-list.component';
import { ProductListComponent } from './product/product-list.component';
import { UserReactiveComponent } from './user/user-reactive.component';

const routes: Routes = [
  {path: '', component: UserReactiveComponent},
  {path: 'post', component: PostListComponent},
  {path: 'product', component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
