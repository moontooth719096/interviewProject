import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videocatefories',
  templateUrl: './videocatefories.component.html',
  styleUrls: ['./videocatefories.component.css']
})
export class VideocateforiesComponent implements OnInit {

  Gridlistcols: any = 4
  videocategoriesdata = [
    {
      "CHID": "1",
      "name": "Pornstar\u30fbAV\u5973\u512a",
      "slug": "pornstar",
      "total_videos": 13533,
      "shortname": "AV\u5973\u512a",
      "category_url": "https:\/\/avgle.com\/videos\/pornstar",
      "cover_url": "https:\/\/avgle.com\/media\/categories\/video\/1.jpg"
    },
    {
      "CHID": "2",
      "name": "JAV\u30fb\u65e5\u672cAV",
      "slug": "jav",
      "total_videos": 111026,
      "shortname": "\u65e5\u672cAV",
      "category_url": "https:\/\/avgle.com\/videos\/jav",
      "cover_url": "https:\/\/avgle.com\/media\/categories\/video\/2.jpg"
    },
    {
      "CHID": "3",
      "name": "Uncensored\u30fb\u7121\u4fee\u6b63",
      "slug": "uncensored",
      "total_videos": 23747,
      "shortname": "\u7121\u4fee\u6b63",
      "category_url": "https:\/\/avgle.com\/videos\/uncensored",
      "cover_url": "https:\/\/avgle.com\/media\/categories\/video\/3.jpg"
    },
    {
      "CHID": "4",
      "name": "Teen\u30fb\u30ae\u30e3\u30eb\u30fb\u5c11\u5973",
      "slug": "teen",
      "total_videos": 3617,
      "shortname": "\u5c11\u5973",
      "category_url": "https:\/\/avgle.com\/videos\/teen",
      "cover_url": "https:\/\/avgle.com\/media\/categories\/video\/4.jpg"
    },
    {
      "CHID": "5",
      "name": "Amateur\u30fb\u7d20\u4eba",
      "slug": "amateur",
      "total_videos": 20496,
      "shortname": "\u7d20\u4eba",
      "category_url": "https:\/\/avgle.com\/videos\/amateur",
      "cover_url": "https:\/\/avgle.com\/media\/categories\/video\/5.jpg"
    },
    {
      "CHID": "6",
      "name": "Anal\u30fb\u30a2\u30ca\u30eb\u30fb\u809b\u4ea4",
      "slug": "anal",
      "total_videos": 1996,
      "shortname": "Anal",
      "category_url": "https:\/\/avgle.com\/videos\/anal",
      "cover_url": "https:\/\/avgle.com\/media\/categories\/video\/6.jpg"
    },
    {
      "CHID": "7",
      "name": "Big Tits\u30fb\u5de8\u4e73",
      "slug": "tits",
      "total_videos": 6469,
      "shortname": "\u5de8\u4e73",
      "category_url": "https:\/\/avgle.com\/videos\/tits",
      "cover_url": "https:\/\/avgle.com\/media\/categories\/video\/7.jpg"
    },
    {
      "CHID": "8",
      "name": "Cosplay\u30fb\u30b3\u30b9\u30d7\u30ec",
      "slug": "cosplay",
      "total_videos": 1151,
      "shortname": "Cosplay",
      "category_url": "https:\/\/avgle.com\/videos\/cosplay",
      "cover_url": "https:\/\/avgle.com\/media\/categories\/video\/8.jpg"
    },
    {
      "CHID": "9",
      "name": "Schoolgirl\u30fb\u5973\u5b50\u6821\u751f",
      "slug": "schoolgirl",
      "total_videos": 2032,
      "shortname": "\u6821\u751f",
      "category_url": "https:\/\/avgle.com\/videos\/schoolgirl",
      "cover_url": "https:\/\/avgle.com\/media\/categories\/video\/9.jpg"
    },
    {
      "CHID": "10",
      "name": "Wife\u30fb\u4eba\u59bb",
      "slug": "wife",
      "total_videos": 12785,
      "shortname": "\u4eba\u59bb",
      "category_url": "https:\/\/avgle.com\/videos\/wife",
      "cover_url": "https:\/\/avgle.com\/media\/categories\/video\/10.jpg"
    },
    {
      "CHID": "11",
      "name": "Mature\u30fb\u719f\u5973",
      "slug": "mature",
      "total_videos": 4377,
      "shortname": "\u719f\u5973",
      "category_url": "https:\/\/avgle.com\/videos\/mature",
      "cover_url": "https:\/\/avgle.com\/media\/categories\/video\/11.jpg"
    },
    {
      "CHID": "12",
      "name": "SM",
      "slug": "sm",
      "total_videos": 1597,
      "shortname": "SM",
      "category_url": "https:\/\/avgle.com\/videos\/sm",
      "cover_url": "https:\/\/avgle.com\/media\/categories\/video\/12.jpg"
    },
    {
      "CHID": "13",
      "name": "China\u30fb\u4e2d\u570b",
      "slug": "cn",
      "total_videos": 40433,
      "shortname": "\u4e2d\u570b",
      "category_url": "https:\/\/avgle.com\/videos\/cn",
      "cover_url": "https:\/\/avgle.com\/media\/categories\/video\/13.jpg"
    },
    {
      "CHID": "14",
      "name": "Hong Kong \u9999\u6e2f",
      "slug": "hk",
      "total_videos": 4501,
      "shortname": "\u9999\u6e2f",
      "category_url": "https:\/\/avgle.com\/videos\/hk",
      "cover_url": "https:\/\/avgle.com\/media\/categories\/video\/14.jpg"
    },
    {
      "CHID": "15",
      "name": "Japan\u30fb\u65e5\u672c",
      "slug": "jp",
      "total_videos": 25356,
      "shortname": "\u65e5\u672c",
      "category_url": "https:\/\/avgle.com\/videos\/jp",
      "cover_url": "https:\/\/avgle.com\/media\/categories\/video\/15.jpg"
    },
    {
      "CHID": "16",
      "name": "Korea\u30fb\u97d3\u56fd\u30fb\ub300\ud55c\ubbfc\uad6d",
      "slug": "kr",
      "total_videos": 27698,
      "shortname": "\u97d3\u56fd",
      "category_url": "https:\/\/avgle.com\/videos\/kr",
      "cover_url": "https:\/\/avgle.com\/media\/categories\/video\/16.jpg"
    },
    {
      "CHID": "17",
      "name": "Taiwan\u30fb\u53f0\u6e7e",
      "slug": "tw",
      "total_videos": 27549,
      "shortname": "\u53f0\u6e7e",
      "category_url": "https:\/\/avgle.com\/videos\/tw",
      "cover_url": "https:\/\/avgle.com\/media\/categories\/video\/17.jpg"
    },
    {
      "CHID": "18",
      "name": "Asian\u30fb\u30a2\u30b8\u30a2",
      "slug": "asian",
      "total_videos": 35682,
      "shortname": "\u4e9e\u6d32",
      "category_url": "https:\/\/avgle.com\/videos\/asian",
      "cover_url": "https:\/\/avgle.com\/media\/categories\/video\/18.jpg"
    },
    {
      "CHID": "19",
      "name": "Western\u30fb\u91d1\u9aea\u6d0b\u7269",
      "slug": "west",
      "total_videos": 25241,
      "shortname": "\u91d1\u9aea",
      "category_url": "https:\/\/avgle.com\/videos\/west",
      "cover_url": "https:\/\/avgle.com\/media\/categories\/video\/19.jpg"
    },
    {
      "CHID": "20",
      "name": "3D",
      "slug": "3d",
      "total_videos": 393,
      "shortname": "3D",
      "category_url": "https:\/\/avgle.com\/videos\/3d",
      "cover_url": "https:\/\/avgle.com\/media\/categories\/video\/20.jpg"
    },
    {
      "CHID": "21",
      "name": "VR 360\u30fb\u4eee\u60f3\u73fe\u5b9f",
      "slug": "vr",
      "total_videos": 6669,
      "shortname": "VR",
      "category_url": "https:\/\/avgle.com\/videos\/vr",
      "cover_url": "https:\/\/avgle.com\/media\/categories\/video\/21.jpg"
    },
    {
      "CHID": "22",
      "name": "Idol\u30fb\u5076\u50cf",
      "slug": "idol",
      "total_videos": 1366,
      "shortname": "\u5076\u50cf",
      "category_url": "https:\/\/avgle.com\/videos\/idol",
      "cover_url": "https:\/\/avgle.com\/media\/categories\/video\/22.jpg"
    },
    {
      "CHID": "23",
      "name": "18+ Movie\u30fb\u6620\u753b\u30fb\u96fb\u5f71",
      "slug": "movie",
      "total_videos": 12638,
      "shortname": "\u6620\u753b",
      "category_url": "https:\/\/avgle.com\/videos\/movie",
      "cover_url": "https:\/\/avgle.com\/media\/categories\/video\/23.jpg"
    },
    {
      "CHID": "24",
      "name": "Anime\u30fb\u30a2\u30cb\u30e1",
      "slug": "anime",
      "total_videos": 2776,
      "shortname": "Anime",
      "category_url": "https:\/\/avgle.com\/videos\/anime",
      "cover_url": "https:\/\/avgle.com\/media\/categories\/video\/24.jpg"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.Gridlistcols = this.cols_get(window.innerWidth);
  }

  onResize(event: any): void {
    this.Gridlistcols = this.cols_get(event.target.innerWidth);
  }

  cols_get(nowwidth: any): any {
    if (nowwidth <= 576)
      return 1;
    else if (nowwidth <= 1200)
      return 2;
    else
      return 4;
  }
}
