import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
@Component({
  selector: 'app-med-crochet',
  templateUrl: './med-crochet.page.html',
  styleUrls: ['./med-crochet.page.scss'],
})
export class MedCrochetPage implements OnInit {

  constructor(private router: Router) {
  }

 ngOnInit() {
 }

 goBackToHome(){
   this.router.navigateByUrl('/home');
 }

 goToMedPattern(){
   this.router.navigateByUrl('/med-pattern');
 }

}
