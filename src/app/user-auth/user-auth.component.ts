import { Component, OnInit } from '@angular/core';
import { signUp } from '../data-type';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  constructor(private seller: SellerService){

  }
  ngOnInit(): void {
    this.seller.reloadSeller()
  }
  signUp(data: signUp): void {
    this.seller.userSignUp(data);
  }
}
