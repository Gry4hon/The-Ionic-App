import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
@Component({
  selector: 'app-easy-crochet',
  templateUrl: './easy-crochet.page.html',
  styleUrls: ['./easy-crochet.page.scss'],
})
export class EasyCrochetPage implements OnInit {

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
