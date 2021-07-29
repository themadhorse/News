import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-horizontal-card-list',
  templateUrl: './horizontal-card-list.component.html',
  styleUrls: ['./horizontal-card-list.component.css']
})
export class HorizontalCardListComponent implements OnInit, OnDestroy {
  pageNo = 0;
  pages: Post[][] = [];
  postSub: Subscription;
  showIframe = false;
  src: string;

  constructor(private dataService: DataService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.pages.push(this.dataService.postList.slice(0,6));
    this.pages.push(this.dataService.postList.slice(6,12));
    this.pages.push(this.dataService.postList.slice(12,18));

    this.postSub = this.dataService.updateList.subscribe(
      (postList: Post[]) => {
        this.pages = [];
        this.pages.push(postList.slice(0,6));
        this.pages.push(postList.slice(6,12));
        this.pages.push(postList.slice(12,18));
      }
    );
  }

  get posts() {
    return this.pages[this.pageNo];
  }

  getSrc(src: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }

  closePopup(event: boolean){
    this.showIframe = !event;
  }

  onDelete(id: number) {
    this.dataService.deletePost(id);
  }

  openContent(src: string){
    this.showIframe = true;
    this.src = src;
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
}
