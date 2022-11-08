import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  OTP=[];

  otpController(event,next,prev, index){
  
  
      if(index == 6) {
        console.log("submit")
      }
      if(event.target.value.length < 1 && prev){
        prev.setFocus()
      }
      else if(next && event.target.value.length>0){
        next.setFocus();
      }
      else {
       return 0;
      } 
   }
}
