import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AccordionModule} from 'primeng/accordion'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgxLineChartModule } from 'ngx-line-chart';

import {HttpClientModule} from '@angular/common/http';
import { FitbitDashboardPage } from './fitbit-dashboard/fitbit-dashboard.page';
import { AzureMapsPage } from './azure-maps/azure-maps.page';
import { ImagePickerPage } from './image-picker/image-picker.page';

@NgModule({
  declarations: [AppComponent, FitbitDashboardPage, AzureMapsPage, ImagePickerPage],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AccordionModule,
    NgxLineChartModule,
    BrowserAnimationsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
