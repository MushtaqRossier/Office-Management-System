import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';



const routes: Routes = [
  { path: 'office', loadChildren: () => import('./office-view/office-view.module').then(m => m.OfficeViewModule) },
  { path: 'home', component: HomeModule},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
