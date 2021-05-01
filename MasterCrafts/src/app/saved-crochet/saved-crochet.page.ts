import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
@Component({
  selector: 'app-saved-crochet',
  templateUrl: './saved-crochet.page.html',
  styleUrls: ['./saved-crochet.page.scss'],
})
export class SavedCrochetPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBackToHome(){
    this.router.navigateByUrl("/home");
  }

}
