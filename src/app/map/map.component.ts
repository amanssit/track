import { LoginService } from './../services/login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  public data: any;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    console.log(this.loginService);
    this.getData();
  }

  getData() {
    this.loginService.getData().subscribe(res => {
      this.data = res;
    })
  }
}
