import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sites-bar',
  templateUrl: './sites-bar.component.html',
  styleUrls: ['./sites-bar.component.scss']
})
export class SitesBarComponent implements OnInit {

  sites = ["天猫", "聚划算", "天猫超市", "淘抢购", "电器城", "司法拍卖", "中国质造", "兴农扶贫", "飞猪旅行", "智能生活", "苏宁易购"];

  constructor() { }

  ngOnInit() {
  }

}
