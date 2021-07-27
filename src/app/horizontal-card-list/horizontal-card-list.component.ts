import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-card-list',
  templateUrl: './horizontal-card-list.component.html',
  styleUrls: ['./horizontal-card-list.component.css']
})
export class HorizontalCardListComponent implements OnInit {
  pageNo = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
