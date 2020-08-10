import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficeViewRoutingModule } from './office-view-routing.module';
import { OfficeViewComponent } from './office-view.component';


@NgModule({
  declarations: [OfficeViewComponent],
  imports: [
    CommonModule,
    OfficeViewRoutingModule
  ]
})
export class OfficeViewModule { }
