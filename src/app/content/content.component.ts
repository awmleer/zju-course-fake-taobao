import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  categoryCollections = [
    ["女装", "男装", "内衣"],
    ["鞋靴", "箱包", "配件"],
    ["童装玩具", "孕产", "用品"],
    ["家电", "数码", "手机"],
    ["美妆", "洗护", "保健品"],
    ["珠宝", "眼镜", "手表"],
    ["运动", "户外", "乐器"],
    ["游戏", "动漫", "影视"],
    ["美食", "生鲜", "零食"],
    ["鲜花", "宠物", "农资"],
    ["房产", "装修", "建材"],
    ["家具", "家饰", "家纺"],
    ["汽车", "二手车", "用品"],
    ["办公", "DIY", "五金电子"],
    ["百货", "餐厨", "家庭保健"],
    ["学习", "卡券", "本地服务"]
  ];

  constructor() { }

  ngOnInit() {
  }

}
