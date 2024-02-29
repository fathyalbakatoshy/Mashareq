import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: "full"},
  {path: 'home', loadComponent: ()=> import('./pages/home/home.component').then((m)=> m.HomeComponent), title: 'Home'},
  {path: "about", loadComponent: ()=> import('./pages/about/about.component').then((m)=> m.AboutComponent), title: "About"},
  {path: 'projects', loadComponent: ()=> import('./pages/projects/projects.component').then((m) => m.ProjectsComponent), title: 'Projects'},
  {path: 'contact', loadComponent: ()=> import("./pages/contact-us/contact-us.component").then((m) => m.ContactUsComponent), title: 'Contact Us'},

  {path: '**', loadComponent: ()=> import('./pages/not-found/not-found.component').then((m)=> m.NotFoundComponent), title: 'Erorr 404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true, scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
