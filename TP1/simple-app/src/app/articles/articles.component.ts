import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../article.service";
import {Article} from "../../../../angular5-articles-app/src/app/models/article";
import {Observable} from "rxjs";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles? : Article[];

  constructor(private articleService: ArticleService) {

  }

  ngOnInit(): void {
    this.getArticles()
  }

  getArticles() {
    this.articleService.getArticles().subscribe(articles => {
      this.articles = articles
    });
  }

  delete(articles : article) {

  }
}
