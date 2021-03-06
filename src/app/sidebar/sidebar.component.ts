import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  view = 2;
  routeSub: Subscription;
  viewingFeedback = false;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.router.events.subscribe(
      (event: any) => {
        if(event.url === "/card")
          this.view = 1;
        else if(event.url === '/list')
          this.view = 2;
      }
    );
  }

  onListClick() {
    this.view = 2;
    this.router.navigate(['list']);
  }

  onCardClick() {
    this.view = 1;
    this.router.navigate(['card']);
  }

  showFeedback() {
    this.viewingFeedback = true;
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
