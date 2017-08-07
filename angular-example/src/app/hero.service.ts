import { Injectable } from '@angular/core'
// import { HEROES } from './mock-heroes'
import { Hero } from './hero'
import { Headers, Http } from '@angular/http'
import 'rxjs/add/operator/toPromise'


// 调用该方法, 以便以后注入
@Injectable()
export class HeroService {
  constructor (private http: Http) {}

  getHeroes(): Promise<Hero[]> {
    // return new Promise(resolve => {
    //   // 模拟 ajax 请求
    //   setTimeout(() => {
    //     resolve(HEROES)
    //   }, 400)
    // })
    return this.http.get('//127.0.0.1:8080/heroes.json')
      .toPromise()
      .then(response => {
        return response.json() as Hero[]
      })
      .catch(this.handleError)
  }
  async getHero(hero_id): Promise<Hero> {
    const HEROES = await this.http.get('//127.0.0.1:8080/heroes.json')
      .toPromise()
      .then(response => response.json() as Hero[])

    const hero = HEROES.find(({id}) => id === hero_id)

    return hero
  }

  private handleError (error: any): Promise<any> {
    return Promise.reject(error.message);
  }
}