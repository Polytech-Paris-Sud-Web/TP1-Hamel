import { Injectable } from '@angular/core';
import {Article} from "../../../angular5-articles-app/src/app/models/article";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http : HttpClient) { }

  public getArticles() : Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles")
  }
}
