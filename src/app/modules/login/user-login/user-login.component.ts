import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    
    sessionStorage.setItem("isLoggedIn", "true");
    
    setTimeout(() => {
      // this.router.navigateByUrl('/');
      this.router.navigateByUrl('/dashboard'); 
    }, 7000);
    // setTimeout(() => {
    //   this.router.navigateByUrl('/login'); 
    //   this.router.navigateByUrl('/dashboard'); 
    // }, 10000);
    

  }

}
