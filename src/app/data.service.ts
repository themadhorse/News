import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { filter, map } from 'rxjs/operators';

import { Post } from "./post.model";

@Injectable({providedIn: "root"})
export class DataService {
  posts: Post[] = [];
  updateList = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<Post[]>('https://api.first.org/data/v1/news')
    .pipe(
      map((responseData: any): Post[] => responseData.data)
    )
    .subscribe(
      (posts: Post[]) => { this.posts = posts.slice(0,5); console.log(this.posts); this.updateList.next(this.posts);}
    );
  }

  get postList() {
    console.log(this.posts)
    return this.posts.slice();
  }

  deletePost(index: number) {
    this.posts.splice(index,1);
    this.updateList.next(this.posts.slice());
  }

}
