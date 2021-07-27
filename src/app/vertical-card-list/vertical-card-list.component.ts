import { HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  pageNo = 0;
  pages: Post[][] = [];
  showIframe = false;
  src: string;


  constructor(private dataService: DataService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    //this.posts = this.dataService.postList;
    this.pages.push(this.dataService.postList.slice(0,5));
    this.pages.push(this.dataService.postList.slice(5,10));
    this.pages.push(this.dataService.postList.slice(10,15));

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
    this.dataService.deletePost(id);
    console.log(id);
  }

  ngOnDestroy(){
    this.postSub.unsubscribe();
  }

  openContent(src: string){
    this.showIframe = true;
    this.src = src;
    console.log(this.showIframe)
  }

  closePopup(event: boolean){
    this.showIframe = !event;
    console.log(this.showIframe);
  }

  getSrc(src: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }

}
