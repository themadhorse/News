import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { filter, map } from 'rxjs/operators';
import { Details } from "./feedback/feedback.component";

import { Post } from "./post.model";

@Injectable({providedIn: "root"})
export class DataService {
  posts: Post[] = [];
  updateList = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getData(numberOfPosts: number) {
    return this.http.get<Post[]>('https://api.first.org/data/v1/news')
    .pipe(
      map((responseData: any): Post[] => responseData.data)
    )
    .subscribe(
      (posts: Post[]) => { this.posts = posts.slice(0,numberOfPosts); console.log(this.posts); this.updateList.next(this.posts);}
    );
  }

  get postList() {
    return this.posts.slice();
  }

  deletePost(id: number) {
    const updatedPosts = this.posts.filter((post: Post) => post.id != id);
    this.posts = updatedPosts
    this.updateList.next(this.posts);
  }

  storeFormData(formData: Details){
    this.http.post("https://news-app-c4085-default-rtdb.firebaseio.com/feedback.json", formData)
    .subscribe();
  }

}
