import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookLogComponent } from './book-log/book-log.component';
import { BookNamesComponent } from './book-names/book-names.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",redirectTo:"/home" ,component:HomeComponent, pathMatch:"full"},
  {path: "home", component: HomeComponent, children:[
    {path: "book-names",component:BookNamesComponent},
    {path:"log-book", component:BookLogComponent} 
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }