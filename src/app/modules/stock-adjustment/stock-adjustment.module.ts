import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockAdjustmentRoutingModule } from './stock-adjustment-routing.module';
import { StockAdjustmentComponent } from './stock-adjustment.component';


@NgModule({
  declarations: [StockAdjustmentComponent],
  imports: [
    CommonModule,
    StockAdjustmentRoutingModule
  ]
})
export class StockAdjustmentModule { }
