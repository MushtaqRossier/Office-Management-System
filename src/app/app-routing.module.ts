import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { ViewOfficeComponent } from './home/view-office/view-office.component';



const routes: Routes = [
  { path: 'office', loadChildren: () => import('./office-view/office-view.module').then(m => m.OfficeViewModule) },
  { path: 'home', component: ViewOfficeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
