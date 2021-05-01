import { Component, OnInit } from '@angular/core';
import{Router}from'@angular/router';
@Component({
  selector: 'app-easy-pattern',
  templateUrl: './easy-pattern.page.html',
  styleUrls: ['./easy-pattern.page.scss'],
})
export class EasyPatternPage implements OnInit {

  constructor(private router: Router) {
  }

 ngOnInit() {
 }

 goBackToHome(){
   this.router.navigateByUrl('/home');
 }

 goToEasyPattern(){
   this.router.navigateByUrl('/easy-pattern');
 }

}
