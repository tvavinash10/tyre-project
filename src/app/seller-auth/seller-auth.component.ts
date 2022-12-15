import { Component, OnInit } from '@angular/core';
import { signUp } from '../data-type';
import { SellerService } from '../services/seller.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  showLogin = true;
  authError:string="";
  constructor(private seller: SellerService, private router: Router) { }
  ngOnInit(): void {
    this.seller.reloadSeller();
  }
  signUp(data: signUp): void {
    this.seller.userSignUp(data);
  }
  login(data: signUp): void {
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or password is not correct";
      }
    })
  }
  openLogin(){
    this.showLogin = true;
  }
  openSignup(){
    this.showLogin = false;
  }
}
