import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listsubjects',
  templateUrl: './listsubjects.component.html',
  styleUrls: ['./listsubjects.component.css']
})
export class ListsubjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  list=[
    {
        "Id": "ADAV",
        "Name": "Lập trình Android nâng cao",
        "Logo": "assets/images/ADAV.jpg"
    },
    {
        "Id": "ADBS",
        "Name": "Lập trình Android cơ bản",
        "Logo": "assets/images/ADBS.jpg"
    },
    {
        "Id": "ADTE",
        "Name": "Kiểm thử và triển khai ứng dụng Android",
        "Logo": "assets/images/ADTE.jpg"
    },
    {
        "Id": "ADUI",
        "Name": "Thiết kế giao diện trên Android",
        "Logo": "assets/images/ADUI.jpg"
    },
    {
        "Id": "ASNE",
        "Name": "Lập trình ASP.NET",
        "Logo": "assets/images/ASNE.png"
    },
    {
        "Id": "CLCO",
        "Name": "Điện toán đám mây",
        "Logo": "assets/images/CLCO.jpg"
    },
    {
        "Id": "DBAV",
        "Name": "SQL Server",
        "Logo": "assets/images/DBAV.png"
    },
    {
        "Id": "DBBS",
        "Name": "Cơ sở dữ liệu",
        "Logo": "assets/images/DBBS.png"
    },
    {
        "Id": "GAME",
        "Name": "Lập trình game 2D",
        "Logo": "assets/images/GAME.png"
    },
    {
        "Id": "HTCS",
        "Name": "HTML5 và CSS3",
        "Logo": "assets/images/HTCS.jpg"
    },
    {
        "Id": "INMA",
        "Name": "Internet Marketing",
        "Logo": "assets/images/INMA.jpg"
    },
    {
        "Id": "JAAV",
        "Name": "Lập trình Java nâng cao",
        "Logo": "assets/images/JAAV.png"
    },
    {
        "Id": "JABS",
        "Name": "Lập trình hướng đối tượng với Java",
        "Logo": "assets/images/JABS.png"
    },
    {
        "Id": "JSPR",
        "Name": "Lập trình JavaScript",
        "Logo": "assets/images/JSPR.png"
    },
    {
        "Id": "LAYO",
        "Name": "Thiết kế layout",
        "Logo": "assets/images/LAYO.jpg"
    },
    {
        "Id": "MOWE",
        "Name": "Thiết kế web cho điện thoại di động",
        "Logo": "assets/images/MOWE.png"
    },
    {
        "Id": "PHPP",
        "Name": "Lập trình PHP",
        "Logo": "assets/images/PHPP.png"
    },
    {
        "Id": "PMAG",
        "Name": "Quản lý dự án với Agile",
        "Logo": "assets/images/PMAG.jpg"
    },
    {
        "Id": "VBPR",
        "Name": "Lập trình VB.NET",
        "Logo": "assets/images/VBPR.png"
    },
    {
        "Id": "WEBU",
        "Name": "Xây dựng trang web",
        "Logo": "assets/images/WEBU.jpg"
    }
]
p=1;
}
