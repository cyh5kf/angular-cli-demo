import './polyfills.ts';  // 兼容老版本的浏览器

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';  // 使用哪个模块启动整个应用
import { enableProdMode } from '@angular/core';  // 关闭angular的开发者模式
import { environment } from './environments/environment';  // 导入环境配置
import { AppModule } from './app/app.module';  // 导入应用主模块

// 如果是生产环境，则关闭angular应用的开发者模式
if (environment.production) {
  enableProdMode();
}

// 启动应用
platformBrowserDynamic().bootstrapModule(AppModule);
