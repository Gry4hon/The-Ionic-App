import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
@Component({
  selector: 'app-share-crochet',
  templateUrl: './share-crochet.page.html',
  styleUrls: ['./share-crochet.page.scss'],
})
export class ShareCrochetPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBackToHome(){
    this.router.navigateByUrl('/home');
  }

}
