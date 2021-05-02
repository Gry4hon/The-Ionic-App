import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
@Component({
  selector: 'app-hard-crochet',
  templateUrl: './hard-crochet.page.html',
  styleUrls: ['./hard-crochet.page.scss'],
})
export class HardCrochetPage implements OnInit {

  constructor(private router: Router) {
  }

 ngOnInit() {
 }

 goBackToHome(){
   this.router.navigateByUrl('/home');
 }
 goToHardPattern(){
   this.router.navigateByUrl('/hard-pattern');
 }

}
