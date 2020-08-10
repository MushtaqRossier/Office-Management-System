import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOfficeComponent } from './create-office/create-office.component';
import { DeleteOfficeComponent } from './delete-office/delete-office.component';
import { UpdateOfficeComponent } from './update-office/update-office.component';
import { ViewOfficeComponent } from './view-office/view-office.component';



@NgModule({
  declarations: [CreateOfficeComponent, DeleteOfficeComponent, UpdateOfficeComponent, ViewOfficeComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
