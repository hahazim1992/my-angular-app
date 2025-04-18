import { Component } from '@angular/core';
import { HomeServiceService } from '../home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private homeServiceService: HomeServiceService) {}

  sendData() {
    const data = { name: 'example' };
    this.homeServiceService.postData(data).subscribe((response) => {
      console.log('POST response:', response);
    });
  }

  getData() {
    this.homeServiceService.getData().subscribe((response) => {
      console.log('GET response:', response);
    });
  }
}
