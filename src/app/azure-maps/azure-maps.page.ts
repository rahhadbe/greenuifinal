import { Component, OnInit } from '@angular/core';
import * as atlas from 'azure-maps-control';

@Component({
  selector: 'app-azure-maps',
  templateUrl: './azure-maps.page.html',
  styleUrls: ['./azure-maps.page.scss'],
})
export class AzureMapsPage implements OnInit {

  map: any;
  subscriptionKey = 'rMSEKUBeJC3GdarhhRMKf7v-rT-qITxPvALiqnL2Q9k';
  pune = [73.8567, 18.5204];

  constructor() { }

  ngOnInit() {
    this.map = new atlas.Map("myapp", {
      language: 'en-US',
      view: "Auto",
      center: this.pune,
      zoom: 13,
      authOptions: {
        authType: atlas.AuthenticationType.subscriptionKey,
        subscriptionKey: this.subscriptionKey
      }
    });
    this.map.controls.add(new atlas.control.ZoomControl(), {
        position: 'bottom-right'
    });
    this.getMap()
  }

  getMap(markerPos = this.pune) {
    //Create a HTML marker and add it to the map.
    var marker = new atlas.HtmlMarker({
      color: 'DodgerBlue',
      position: markerPos
    });

    this.map.markers.add(marker);
  }

}
