import { Component, OnInit } from '@angular/core';
import * as atlas from 'azure-maps-control';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  loggedInUser: string = 'jgupta@gmail.com';

  private monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  scoreHistory = [{
    name: 'Green Score',
    points: []
  }];
  scoreToday: number;

  counter: number = 0;
  mapScore: number = 0;
  score: number = 0;
  map: any;
  subscriptionKey = 'rMSEKUBeJC3GdarhhRMKf7v-rT-qITxPvALiqnL2Q9k';
  pune = [73.8567, 18.5204];
  
  lastMouseDown: any;
  lastMouseUp: any;

  activityType: string;

  private base64Image: string;
  url: string | ArrayBuffer;

  constructor(private apiCallService: ApiCallService) { }

  ngOnInit() {
    this.scoreToday = 0;
    this.url = null;
    this.getScoreHistory();
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
    this.map.events.add('ready', () => {
      this.mapScore = 0;
      this.map.events.add('mousedown', (event) => {
        console.log('down');
        console.log(this.lastMouseDown);
        console.log(this.lastMouseUp);
        console.log(event.position);
        this.lastMouseDown = event.position;
        this.counter++;
      });
  
      this.map.events.add('mouseup', (event) => {
        console.log('up');
        console.log(this.lastMouseDown);
        console.log(this.lastMouseUp);
        console.log(event.position);
        this.lastMouseUp = event.position;
        if (this.counter % 2 == 0) {
          this.mapScore = Number(Number(Math.random() * 5).toFixed(2));
        }
      });
    });
  }

  onSelectFile(event, activityType: number) {
    console.log('onSelectFile: ');
    console.log(event);
    console.log(activityType);
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        var enc = new TextDecoder("utf-8");
        this.url = reader.result;
        console.log(this.url);
        this.score = Number(Number(Math.random() * 10).toFixed(2));
        console.log(this.score);
        this.apiCallService.setUserActivity(this.loggedInUser, activityType);
        console.log('bye');
      }
    }
  }

  // Get past 7 days score history
  getScoreHistory() {
    this.scoreHistory[0].points = [{ x: 1, y: 10 }, { x: 2, y: 20 }, { x: 3, y: 10 }, { x: 4, y: 15 }, { x: 5, y: 100 }, { x: 6, y: 120 }, { x: 7, y: 0 }]
    this.apiCallService.getStepCountScoreByUser(this.loggedInUser).subscribe(result => {
      let Ys = result;
      let Ys_i = 0;
      console.log(Ys);
      this.scoreHistory[0].points = [];
      for (let i=6; i>=0; i--) {
        if (Ys[Ys_i]) {
          this.scoreHistory[0].points.push({x: i+1, y: Ys[Ys_i]});
          Ys_i++;
        } else {
          this.scoreHistory[0].points.push({x: i+1, y: 0});
        }
      }
    });

    // Get score of last day (present day)
    this.scoreToday = this.scoreHistory[0].points.find(h => h.x === 7).y;
  }

  formXAxisValue(value: number) {
    // Format x values for past 7 days (7 => today, 6 => yesterday, and so on..)
    var date = new Date();
    date.setDate(date.getDate() - (7 - value));
    return date.getDay() + '/' + this.monthNames[date.getMonth()];
  }

  // Dummy data for `scoreHistory`
  syncWithDeviceDummy() {
    this.scoreToday += Math.floor(Math.random() * 50 + 10);
    let today = this.scoreHistory[0].points.find(h => h.x === 7);
    today.y = this.scoreToday;
  }
}
