import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fitbit-dashboard',
  templateUrl: './fitbit-dashboard.page.html',
  styleUrls: ['./fitbit-dashboard.page.scss'],
})
export class FitbitDashboardPage implements OnInit {

  @Input('loggedInUser') loggedInUser: string;

  private monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

   scoreHistory = [{
    name: 'Green Score',
    points: []
  }];

   scoreToday: number;

  constructor() {}

  ngOnInit() {
    this.scoreToday = 0;
    this.getScoreHistory();
  }

  // Get past 7 days score history
  getScoreHistory() {
    // TODO: connect with database
    this.scoreHistory[0].points = [{x: 1, y: 10}, {x: 2, y: 20}, {x: 3, y: 10}, {x: 4, y: 15}, {x: 5, y: 100}, {x: 6, y: 120}, {x: 7, y: 0}]
    
    // Get score of last day (present day)
    this.scoreToday = this.scoreHistory[0].points.find(h => h.x === 7).y;
  }

  formXAxisValue(value: number) {
    // Format x values for past 7 days (7 => today, 6 => yesterday, and so on..)
    var date = new Date();
    date.setDate(date.getDate()-(7-value));
    return date.getDay() + '/' + this.monthNames[date.getMonth()];
  }

  // Dummy data for `scoreHistory`
  syncWithDeviceDummy() {
    this.scoreToday += Math.floor(Math.random() * 50 + 10);
    let today = this.scoreHistory[0].points.find(h => h.x === 7);
    today.y = this.scoreToday;
  }

}
