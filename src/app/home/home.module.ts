import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateOfficeComponent } from './create-office/create-office.component';
import { DeleteOfficeComponent } from './delete-office/delete-office.component';
import { UpdateOfficeComponent } from './update-office/update-office.component';
import { ViewOfficeComponent } from './view-office/view-office.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateOfficeComponent, DeleteOfficeComponent, UpdateOfficeComponent, ViewOfficeComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CreateOfficeComponent, DeleteOfficeComponent, UpdateOfficeComponent, ViewOfficeComponent]
})
export class HomeModule { }
