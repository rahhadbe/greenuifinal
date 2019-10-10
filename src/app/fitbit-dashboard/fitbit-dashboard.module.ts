import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FitbitDashboardPage } from './fitbit-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: FitbitDashboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FitbitDashboardPage]
})
export class FitbitDashboardPageModule {}
