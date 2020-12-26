import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'care-home';
  public isLoggedIn:boolean =false;


   ngOnInit(){
    
       setTimeout(() => {
        sessionStorage.getItem("isLoggedIn");
        console.log(sessionStorage.getItem("isLoggedIn"));
        if(sessionStorage.getItem("isLoggedIn")!=null)
        this.isLoggedIn = true;
       }, 3000);
     
   }

}
