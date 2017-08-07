import { Component, OnInit } from '@angular/core';
import { Hero } from './hero'
import { HeroService } from './hero.service'
import { Router } from '@angular/router'

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  // 服务提供商
  // providers: [HeroService]
})
// 实现 OnInit 接口
export class HeroesComponent implements OnInit {

  hero : Hero = {
    id: 1,
    name: 'hehe'
  }
  selectedHero: Hero
  heroes: Hero[]
  // 依赖注入
  constructor (
    private heroService: HeroService,
    private router: Router
  ) {}

  async getHeroes(): Promise<void> {
    // 可直接使用 async/await
    this.heroes = await this.heroService.getHeroes()
  }

  ngOnInit(): void {
    this.getHeroes()
  } 

  onSelect (hero: Hero): void {
    this.selectedHero = hero
  }

  gotoDetail(): void {
    // JS 内跳转需要调用 router
    this.router.navigate(['/detail', this.selectedHero.id])
  }
}
