import { Component } from '@angular/core';

// 组件元数据装饰器，里面的属性叫元数据
@Component({
  selector: 'app-root', // css选择器
  templateUrl: './app.component.html', //定义组件模板，组件必备属性
  styleUrls: ['./app.component.css'] //定义css文件
})

// TypeScript类，定义组件的控制器
export class AppComponent {
  title = 'app works!';
  
}
