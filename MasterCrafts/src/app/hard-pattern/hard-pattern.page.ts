import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-hard-pattern',
  templateUrl: './hard-pattern.page.html',
  styleUrls: ['./hard-pattern.page.scss'],
})
export class HardPatternPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBackToHome(){
    this.router.navigateByUrl('/home')
  }


}
