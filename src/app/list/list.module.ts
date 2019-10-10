import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { ListPage } from './list.page';
import { FitbitDashboardPageModule } from '../fitbit-dashboard/fitbit-dashboard.module';
import { NgxLineChartModule } from 'ngx-line-chart';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccordionModule.forRoot(),
    // FitbitDashboardPageModule,
    NgxLineChartModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      }
    ])
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ListPage]
})
export class ListPageModule {}
