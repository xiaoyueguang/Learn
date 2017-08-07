import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HeroesComponent } from './app/heroes.component'
import { HeroDetailComponent } from './app/hero-detail.component'
import { DashboardComponent } from './app/dashboard.component'

// 定义路由
const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    // 重定向
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    // 带参数
    path: 'detail/:id',
    component: HeroDetailComponent
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  // angular 导出
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
