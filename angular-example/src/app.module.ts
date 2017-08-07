import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app/app.component';
import { HeroDetailComponent } from './app/hero-detail.component'
import { HeroesComponent } from './app/heroes.component'
import { DashboardComponent } from './app/dashboard.component'

import { HeroService } from './app/hero.service'

import { AppRoutingModule } from './app.routing.module'

// 装饰器
@NgModule({
  // 使用的组件
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  // angular 的导入模块
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  // 全局服务提供商
  providers: [HeroService],
  // 主视图
  bootstrap: [AppComponent]
})
export class AppModule { }
