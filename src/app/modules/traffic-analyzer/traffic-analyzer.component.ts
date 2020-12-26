import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-traffic-analyzer',
//   templateUrl: './sidemenu.component.html',
//   styleUrls: ['./sidemenu.component.css']
})
export class TrafficAnalyzerComponent implements OnInit {

  public currentUrl:string="";

  constructor(public router : Router) { }

  ngOnInit(): void {
      
        this.getUrl();
  

  }

  getUrl():void{
    console.log("Router",this.router.url);
    this.currentUrl = this.router.url;
  }

}
