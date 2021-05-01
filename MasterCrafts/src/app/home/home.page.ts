import { Component } from '@angular/core';
import{Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {
    //call functions here to happen on load
  }

  //Put functions here
  goToEasyCrochet(){
    this.router.navigateByUrl('/easy-crochet');
  }
  goToMedCrochet(){
    this.router.navigateByUrl('/med-crochet');
  }
  goToHardCrochet(){
    this.router.navigateByUrl('/hard-crochet');
  }
  goToCompleted(){
    this.router.navigateByUrl('/saved-crochet');
  }
  goToShare(){
    this.router.navigateByUrl('/share-crochet');
  }



}
