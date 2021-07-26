import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-vertical-card-list',
  templateUrl: './vertical-card-list.component.html',
  styleUrls: ['./vertical-card-list.component.css']
})
export class VerticalCardListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  postSub: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData();
    this.posts = this.dataService.postList;

    this.dataService.updateList.subscribe(
      (postList: Post[]) => { this.posts = postList; }
    );
  }

  onDelete(index: number) {
    this.dataService.deletePost(index);
  }

  ngOnDestroy(){
    this.postSub.unsubscribe();
  }

}
