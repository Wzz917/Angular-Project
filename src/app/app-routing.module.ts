import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post/post-list.component';
import { ProductListComponent } from './product/product-list.component';
import { UserReactiveComponent } from './user/user-reactive.component';
import { HttpComponent } from './http/http.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/things', pathMatch: 'full' },
  {path: 'things', component: HttpComponent},
  {path: 'posts', component: PostListComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'albums', component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
