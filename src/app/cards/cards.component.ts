import { ActivatedRoute, Router,Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(
    private router: Router,
    private ar: ActivatedRoute
  ) { }

  num: number = 0;

  goHome() {
    this.router.navigateByUrl('/');
    
  }

  goFlot() {
    this.router.navigate(['/charts', 'flot']);
  }

  add() {
   this.router.navigate(['/cards', this.num+1]);
  }

  ngOnInit() {
    this.ar.params.subscribe((
      (x) => {
        if (x['num']) {
          this.num = parseInt(x['num']);
        }
      }
    ));

  }

}
