import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgxLineChartModule } from 'ngx-line-chart';

import {HttpClientModule} from '@angular/common/http';
// import { FitbitDashboardPage } from './fitbit-dashboard/fitbit-dashboard.page';
import { AzureMapsPage } from './azure-maps/azure-maps.page';
import { ImagePickerPage } from './image-picker/image-picker.page';
import { SocialMediaShareComponent } from './social-media-share/social-media-share.component';


@NgModule({
  declarations: [AppComponent, SocialMediaShareComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    // NgxLineChartModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
