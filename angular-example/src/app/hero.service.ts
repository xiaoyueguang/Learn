import { Injectable } from '@angular/core'
import { HEROES } from './mock-heroes'
import { Hero } from './hero'

// 调用该方法, 以便以后注入
@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return new Promise(resolve => {
      // 模拟 ajax 请求
      setTimeout(() => {
        resolve(HEROES)
      }, 400)
    })
  }
  getHero(hero_id): Promise<Hero> {
    return new Promise(resolve => {
      const hero = HEROES.find(({id}) => id === hero_id)
      setTimeout(() => {
        resolve(hero)
      }, 400)
    })
  }
}