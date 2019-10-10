import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


@Component({
  selector: 'app-social-media-share',
  templateUrl: './social-media-share.component.html',
  styleUrls: ['./social-media-share.component.scss'],
})
export class SocialMediaShareComponent implements OnInit {

  constructor(private socialSharing: SocialSharing) { }

  ngOnInit() {}

  shareViaEmail() {
    // Check if sharing via email is supported
    this.socialSharing.canShareViaEmail().then(() => {
      // Sharing via email is possible
    }).catch(() => {
      // Sharing via email is not possible
      console.log('Cannot share via email');
    });

    // Share via email
    this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }

}
