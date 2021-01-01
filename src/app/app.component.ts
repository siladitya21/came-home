import { Component } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'care-home';
  public isLoggedIn:boolean =false;
          
      constructor(private loadingBar: LoadingBarService){

      }

   ngOnInit(){
    
       setTimeout(() => {
        sessionStorage.getItem("isLoggedIn");
        console.log(sessionStorage.getItem("isLoggedIn"));
        if(sessionStorage.getItem("isLoggedIn")!=null)
        this.isLoggedIn = true;
       }, 500);
     
   }

   startLoading() {
    this.loadingBar.start();
  }

  stopLoading() {
    this.loadingBar.complete();
  }

}
