import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfficeViewComponent } from './office-view.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';
import { CreateStaffComponent } from './create-staff/create-staff.component';
import { DeleteStaffComponent } from './delete-staff/delete-staff.component';
import { UpdateStaffComponent } from './update-staff/update-staff.component';

const routes: Routes = [
  { path: '', component: OfficeViewComponent },
  { path: 'create-staff', component: CreateStaffComponent},
  { path: 'delete-staff', component: DeleteStaffComponent},
  { path: 'update-staff', component: UpdateStaffComponent},
  { path: 'view-staff', component: ViewStaffComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficeViewRoutingModule { }
