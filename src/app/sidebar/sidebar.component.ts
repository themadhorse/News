import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  view = 2;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onListClick() {
    this.view = 2;
    this.router.navigate(['/list-view']);
  }

  onCardClick() {
    this.view = 1;
    this.router.navigate(['/card-view']);
  }

}
