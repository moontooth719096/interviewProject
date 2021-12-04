import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDrawerToggleResult, MatSidenav } from '@angular/material/sidenav';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DeviceDetectorService } from 'ngx-device-detector';
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

  constructor(private deviceService: DeviceDetectorService) { }
  isLeftmenuButton: boolean = false;
  isLeftmenu: boolean = false;
  isLeftmenuItemTitle: boolean = false;
  menumode: any = 'over';
  programName = 'Tri001'; //預設頁面是第一隻程式
  ngOnInit(): void {
    let nowlevel = this.cols_get(innerWidth);
    let deviceInfo = this.deviceService.getDeviceInfo();
    console.log(deviceInfo);
    this.Mode_Check(nowlevel);
  }

  onResize(event: any): void {
    let nowlevel = this.cols_get(innerWidth);
    this.Mode_Check(nowlevel);
  }
  cols_get(nowwidth: any) {
    if (nowwidth <= 576)
      return 1;
    else
      return 4;
  }
  Mode_Check(nowlevel: any) {
    if (nowlevel == 1 && !this.deviceService.isDesktop())
      this.MobileMode();
    else
      this.PCMode();
  }

  MobileMode() {
    this.isLeftmenuButton = true;
    this.menumode = 'over';
    this.isLeftmenu = false;
    this.isLeftmenuItemTitle = true;
  }

  PCMode() {
    this.isLeftmenuButton = false;
    this.menumode = 'side';
    this.isLeftmenu = true;
    this.isLeftmenuItemTitle = false;
  }

}
