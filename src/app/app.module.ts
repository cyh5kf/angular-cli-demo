import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';

// 装饰器，
@NgModule({
  declarations: [  // 声明模块中有哪些组件，只能声明组件、指令和管道
    AppComponent, NavbarComponent, FooterComponent, SearchComponent, CarouselComponent, ProductComponent, StarsComponent
  ],
  imports: [   // 模块依赖的其他模块
    BrowserModule,  // 浏览器模块
    FormsModule,  // 表单模块
    HttpModule  // http服务模块
  ],
  providers: [],  // 声明模块中提供了什么服务，依赖注入
  bootstrap: [AppComponent]  //声明了模块的主组件
})
export class AppModule { }
