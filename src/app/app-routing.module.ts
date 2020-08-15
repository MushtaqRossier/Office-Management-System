import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { ViewOfficeComponent } from './home/view-office/view-office.component';
import { CreateOfficeComponent } from './home/create-office/create-office.component';
import { UpdateOfficeComponent } from './home/update-office/update-office.component';
import { DeleteOfficeComponent } from './home/delete-office/delete-office.component';



const routes: Routes = [
  { path: 'home', component: ViewOfficeComponent},
  { path: 'office', loadChildren: () => import('./office-view/office-view.module').then(m => m.OfficeViewModule) },
  { path: 'create-office', component: CreateOfficeComponent},
  { path: 'update-office/:id', component: UpdateOfficeComponent},
  { path: 'delete-office/:id', component: DeleteOfficeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
