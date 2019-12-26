import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'click-collect', loadChildren: () => import('./modules/Click-Collect/Orders/click-collect.module').then(m => m.ClickCollectModule) }, { path: 'stock-adjustment', loadChildren: () => import('./modules/stock-adjustment/stock-adjustment.module').then(m => m.StockAdjustmentModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
