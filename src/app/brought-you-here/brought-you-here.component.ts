import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brought-you-here',
  templateUrl: './brought-you-here.component.html',
  styleUrls: ['./brought-you-here.component.css']
})
export class BroughtYouHereComponent {

  showImage1: boolean = true;
  showImage2: boolean = false;
  showImage3: boolean = false;
  showButton1: boolean = true;
  showButton2: boolean = false;
  showButton3: boolean = false;

  constructor(private router: Router) {}

  handleButtonClick() {
    this.showImage2 = true;
    this.showImage1 = false;
    this.showButton1 = false;
    this.showButton2 = true;
  }
  handleSecondButtonClick() {
    this.showImage3 = true;
    this.showImage2 = false;
    this.showButton2 = false;
    this.showButton3 = true;
  }

  handleThirdButtonClick() {
    this.router.navigate(['/second-to-last']);
  }
}
