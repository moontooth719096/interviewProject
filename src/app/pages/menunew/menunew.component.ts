import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-menunew',
  templateUrl: './menunew.component.html',
  styleUrls: ['./menunew.component.css'],
  animations: [
    trigger('openClose', [
      state('true', style({ width: '*' })),
      state('false', style({ width: '0px' })),
      transition('false <=> true', animate(50))
    ])
  ]
})
export class MenunewComponent implements OnInit {

  constructor(private deviceService: DeviceDetectorService) { }
  //開啟左側選單按鈕 於topbar標題旁，用於手持裝置需要打開leftmenu使用
  isLeftmenuButton: boolean = false;
  //是否顯示左側選單
  isLeftmenu: boolean = false;
  //是否顯示左側選單item的標題
  isLeftmenuItemTitle: boolean = false;
  //設定選單的模式
  menumode: any = 'over';

  menudata = [
    {
      "itemtitle": "AA",
      "itmeURL": "/AV"
    },
    {
      "itemtitle": "DashBroad",
      "itmeURL": "/dashbroad"
    }

  ]

  ngOnInit(): void {
    //取得目前瀏覽器大小 計算等級
    let nowlevel = this.cols_get(innerWidth);
    //設定裝置顯示模式
    this.Mode_Check(nowlevel);
  }
  //每次大小變更時，重新判斷mode
  onResize(event: any): void {
    let nowlevel = this.cols_get(innerWidth);
    this.Mode_Check(nowlevel);
  }

  //判斷裝置大小等級
  cols_get(nowwidth: any) {
    if (nowwidth <= 576)
      return 1;
    else
      return 4;
  }

  //設定裝置顯示模式
  Mode_Check(nowlevel: any) {
    if (nowlevel == 1 || !this.deviceService.isDesktop())
      this.MobileMode();
    else
      this.PCMode();
  }

  //手持裝置模式
  MobileMode() {
    //顯示點擊打開左側選單按鈕
    this.isLeftmenuButton = true;
    //設定選單出現微 over模式
    this.menumode = 'over';
    //預設左側選單不顯示
    this.isLeftmenu = !this.isLeftmenuButton;
    //預設左側選單項目標題顯示
    this.isLeftmenuItemTitle = true;
  }

  //pc模式
  PCMode() {
    //預設不顯示左側選單按鈕
    this.isLeftmenuButton = false;
    //設定選單出現模式為 side
    this.menumode = 'side';
    //設定左側選單預設為開啟
    this.isLeftmenu = true;
    //設定左側選單標題預設為關閉
    this.isLeftmenuItemTitle = false;
  }

}
