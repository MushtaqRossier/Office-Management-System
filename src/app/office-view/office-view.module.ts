import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficeViewRoutingModule } from './office-view-routing.module';
import { OfficeViewComponent } from './office-view.component';
import { CreateStaffComponent } from './create-staff/create-staff.component';
import { DeleteStaffComponent } from './delete-staff/delete-staff.component';
import { UpdateStaffComponent } from './update-staff/update-staff.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    OfficeViewComponent, 
    CreateStaffComponent, 
    DeleteStaffComponent, 
    UpdateStaffComponent, 
    ViewStaffComponent
  ],
  imports: [
    CommonModule,
    OfficeViewRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ]
})
export class OfficeViewModule { }
