import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  public currentUrl:string="";

  constructor(public router : Router) { }

  ngOnInit(): void {
      
        this.getUrl();
  

  }

  getUrl():void{    
    setTimeout(() => {
      console.log("Router",this.router.url);
      this.currentUrl = this.router.url;
    }, 100);
  }

}
