import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Article } from '../shared/models/Article.model';
import { referencePatternValidator } from '../shared/validators/referencePattern.validator';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent {
  articles: Article[]
  articleForm

  constructor(private formBuilder: FormBuilder) {
    this.articles = new Array();
    this.articleForm = this.formBuilder.group({
      reference: ["", [Validators.required, referencePatternValidator]],
      nom:["", Validators.required],
      description: ["", Validators.required],
      prix: ["", Validators.required]
    })
  }

  onSubmit(): void {
    const createArticle = new Article(
      this.articleForm.get("reference")?.value,
      this.articleForm.get("nom")?.value,
      this.articleForm.get("description")?.value,
      this.articleForm.get("prix")?.value
    )
    this.articles.push(createArticle)
    this.articleForm.reset()
  }
}
