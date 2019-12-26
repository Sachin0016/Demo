import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ClickCollectRoutingModule } from './click-collect-routing.module';
import { ClickCollectComponent } from './click-collect.component';
import { HttpClientModule } from '@angular/common/http';
import {DpDatePickerModule} from 'ng2-date-picker';
import { FormsModule } from '@angular/forms';
import { OrderFilterPipe } from './shared/orderFilter.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination'

import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [ClickCollectComponent,OrderFilterPipe],
  imports: [
    CommonModule,
    ClickCollectRoutingModule,
    HttpClientModule,
    DpDatePickerModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule,
    Ng2SearchPipeModule 

  ],
})
export class ClickCollectModule { }
 