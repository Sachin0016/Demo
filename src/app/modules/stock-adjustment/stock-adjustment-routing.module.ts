import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockAdjustmentComponent } from './stock-adjustment.component';

const routes: Routes = [{ path: '', component: StockAdjustmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockAdjustmentRoutingModule { }
