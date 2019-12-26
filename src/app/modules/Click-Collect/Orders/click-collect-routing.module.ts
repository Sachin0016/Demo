import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClickCollectComponent } from './click-collect.component';

const routes: Routes = [{ path: '', component: ClickCollectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClickCollectRoutingModule { }
