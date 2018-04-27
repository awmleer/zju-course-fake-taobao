import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.scss']
})
export class MainSearchComponent implements OnInit {

  suggestionWords = ['新款连衣裙','四件套','潮流T恤','时尚女鞋','短裤','半身裙','男士外套','墙纸','行车记录仪','新款男鞋','耳机'];

  constructor() { }

  ngOnInit() {
  }

}
