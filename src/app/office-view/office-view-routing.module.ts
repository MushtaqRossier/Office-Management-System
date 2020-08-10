import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfficeViewComponent } from './office-view.component';

const routes: Routes = [{ path: '', component: OfficeViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficeViewRoutingModule { }
