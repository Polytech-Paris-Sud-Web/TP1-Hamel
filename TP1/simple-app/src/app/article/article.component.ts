import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Article} from "../../../../angular5-articles-app/src/app/models/article";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  title: string;
  @Input("customContent")
  content: string;
  @Input("customAuthor")
  author: string;

  @Output()
  deletedArticle : EventEmitter<Article> = new EventEmitter();

  constructor() {
    this.title = 'First Article';
    this.content = 'Hello World';
    this.author = "hugo";
  }

  ngOnInit(): void {
  }

  delete() {
    this.deletedArticle.emit(this.article);
  }

}
