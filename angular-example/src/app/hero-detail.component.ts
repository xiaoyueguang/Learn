import  { Component, Input, OnInit } from '@angular/core';
import { Hero } from './hero'
import { HeroService } from './hero.service'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Location } from '@angular/common'
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
  // 相当于 props. 这个 input 值是可以改的. 轻松实现父子组件双向绑定
  // @Input() hero: Hero
  hero: Hero
  constructor (
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  async ngOnInit () {
    // this.hero = this.heroService
    this.route.paramMap
      // 路由参数获取
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      // id有变化时, 订阅该变化, 有变化时调用以下回调
      .subscribe(hero => {
        this.hero = hero
      })
  }

  goBack(): void {
    // 回退
    this.location.back();
  }
}