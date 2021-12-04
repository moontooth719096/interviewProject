import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDrawerToggleResult, MatSidenav } from '@angular/material/sidenav';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('openClose', [
      state('true', style({ width: '*' })),
      state('false', style({ width: '0px' })),
      transition('false <=> true', animate(50))
    ])
  ]
})
export class MenuComponent implements OnInit {

  constructor() { }
  isLeftmenuButton: boolean = false;
  isLeftmenu: boolean = false;
  isLeftmenuItemTitle: boolean = false;
  menumode: any = 'over';
  programName = 'Tri001'; //預設頁面是第一隻程式
  ngOnInit(): void {
    console.log(window.navigator);
    // let nowlevel = this.cols_get(window.innerWidth);
    // this.menumode = this.menumode_change(nowlevel);
    // this.isLeftmenuButton = this.LeftmenuButton_Show(nowlevel);
    // this.isLeftmenu = this.Leftmenu_Show(nowlevel);
    // this.isLeftmenuItemTitle = this.LeftmenuItemTitle_Show(nowlevel);
  }

  onResize(event: any): void {
    let nowlevel = this.cols_get(window.innerWidth);
    this.menumode = this.menumode_change(nowlevel);
    this.isLeftmenuButton = this.LeftmenuButton_Show(nowlevel);
    this.isLeftmenu = this.Leftmenu_Show(nowlevel);
    this.isLeftmenuItemTitle = this.LeftmenuItemTitle_Show(nowlevel);
  }
  cols_get(nowwidth: any) {
    if (nowwidth <= 576)
      return 1;
    else if (nowwidth <= 1200)
      return 2;
    else
      return 4;
  }
  menumode_change(nowlevel: any) {
    switch (nowlevel) {
      case 1:
        return 'over';
      default:
        return 'side';
    }
  }
  LeftmenuButton_Show(nowlevel: any) {
    switch (nowlevel) {
      case 1:
        return true;
      default:
        return false;
    }
  }

  Leftmenu_Show(nowlevel: any) {
    switch (nowlevel) {
      case 1:
        return false;
      default:
        return true;
    }
  }
  LeftmenuItemTitle_Show(nowlevel: any) {
    switch (nowlevel) {
      case 1:
        return true;
      default:
        return this.isLeftmenuItemTitle;
    }
  }

  // Device_check()
  // {

  //   if (this.browser.versions.mobile) { //判斷是否是移動設備打開。browser代碼在上面面
  //     var ua = navigator.userAgent.toLowerCase(); //獲取判斷用的對象
  //     if (ua.match(/MicroMessenger/i) == "micromessenger") {
  //       //在微信中打開
  //       return e ? this.debug("weixin") : "weixin";
  //     }
  //     if (ua.match(/WeiBo/i) == "weibo") {
  //       //在新浪微博客戶端打開
  //       return e ? this.debug("weibo") : "weibo";
  //     }
  //     if (ua.match(/QQ/i) == "qq") {
  //       //在QQ空間打開
  //       return e ? this.debug("Qzone") : "Qzone";
  //     }
  //     if (this.browser.versions.ios) {
  //       //是否在IOS瀏覽器打開
  //       return e ? this.debug("ios") : "ios";
  //     }
  //     if (this.browser.versions.android) {
  //       //是否在安卓瀏覽器打開
  //       return e ? this.debug("android") : "android";
  //     } else {
  //       return e ? this.debug("browser") : "browser";
  //     }
  //   } else {
  //     //否則就是PC瀏覽器打開
  //     return e ? this.debug("PC") : "PC";
  //   }
  // }

}
