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
  //posts: Post[] = [];
  postSub: Subscription;
  pageNo = 1;
  pages: Post[][] = [];


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData(15);
    //this.posts = this.dataService.postList;

    this.postSub = this.dataService.updateList.subscribe(
      (postList: Post[]) => {
        this.pages = [];
        this.pages.push(postList.slice(0,5));
        this.pages.push(postList.slice(5,10));
        this.pages.push(postList.slice(10,15));
       }
    );
  }

  getPosts(index: number) {
    return this.pages[index];
  }

  onDelete(id: number) {
    //this.dataService.deletePost(((this.pageNo)*5)+index);
    this.dataService.deletePost(id);
    console.log(id);
  }

  ngOnDestroy(){
    this.postSub.unsubscribe();
  }

  openContent(){
    console.log("lmao")
  }

}
