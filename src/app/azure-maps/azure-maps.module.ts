import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AzureMapsPage } from './azure-maps.page';

const routes: Routes = [
  {
    path: '',
    component: AzureMapsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AzureMapsPage]
})
export class AzureMapsPageModule {}
