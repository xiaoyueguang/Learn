import { Component, OnInit } from '@angular/core';

import { Hero } from './hero'
import { HeroService } from './hero.service'

@Component({
  selector: 'my-dashboard',
  // 模板 URL
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = []

  constructor (private heroService: HeroService) {}

  async ngOnInit (): Promise<void> {
    let arr = await this.heroService.getHeroes()
    this.heroes = arr.slice(1, 5)
  }
}