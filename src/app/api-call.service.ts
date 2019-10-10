import { Injectable } from '@angular/core';
import {HttpClientModule, HttpHeaders, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  private StepCountActivityNumber: number = 2;

  private BaseUrl: string = 'https://newjava11.azurewebsites.net/Hackformers';
  //private BaseUrl: string = 'http://192.168.43.185:8081/Hackformers';

  constructor(private httpClient: HttpClient) {}

  getStepCountScoreByUser(userEmail: string) {
    let url = this.BaseUrl + '/getActivityByUser?userId=' + userEmail + '&activityType=2';
    return this.httpClient.get(url);
  }

  getTotalScoreByUser(userEmail: string) {
    let url = this.BaseUrl + '/getActivityByUser?userId=' + userEmail;
    return this.httpClient.get(url);
  }

  setUserActivity(userEmail: string, activityType: number) {
    let url = this.BaseUrl + '/setUserActivity?userId=' + userEmail + '&activityType=' + activityType.toString();
    console.log(url);
    this.httpClient.get(url).subscribe(r => {
      console.log(r);
    });
  }

}
