import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-to-last',
  templateUrl: './second-to-last.component.html',
  styleUrls: ['./second-to-last.component.css']
})
export class SecondToLastComponent {

  counter: number = 0;

  constructor(private router: Router) {}

  incrementCounter() {
    this.counter++;
    if (this.counter === 10) {
      this.router.navigate(['/final-page']);
    }
  }
}
