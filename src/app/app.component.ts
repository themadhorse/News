import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'KalpasTaskOne';

  constructor(private dataService: DataService) {}

  ngOnInit(){
    this.dataService.getData(18);
  }
}
