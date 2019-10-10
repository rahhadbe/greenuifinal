import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.page.html',
  styleUrls: ['./image-picker.page.scss']
})
export class ImagePickerPage implements OnInit {

  @Input("activityType") activityType: string;

  private base64Image: string;
  url: string | ArrayBuffer;

  constructor() { }

  ngOnInit() {
    this.url = null;
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        var enc = new TextDecoder("utf-8");
        this.url = reader.result;
      }
    }
  }

}
