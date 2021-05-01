import { Component, OnInit } from '@angular/core';
import{ Router} from '@angular/router';
@Component({
  selector: 'app-med-pattern',
  templateUrl: './med-pattern.page.html',
  styleUrls: ['./med-pattern.page.scss'],
})
export class MedPatternPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBackToHome(){
    this.router.navigateByUrl('/home')
  }

}
