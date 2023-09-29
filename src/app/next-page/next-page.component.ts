import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-next-page',
  templateUrl: './next-page.component.html',
  styleUrls: ['./next-page.component.css']
})
export class NextPageComponent implements OnInit {

  showSecondButton: boolean = false;
  showThirdButton: boolean = false;
  showFourthButton: boolean = false;
  showFifthButton: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Set a timeout to show the second button after 5 seconds
    setTimeout(() => {
      this.showSecondButton = true;
    }, 5000);
    setTimeout(() => {
      this.showThirdButton = true;
    }, 7000);
    setTimeout(() => {
      this.showFourthButton = true;
    }, 7500);
    setTimeout(() => {
      this.showFifthButton = true;
    }, 9000);

  }

  goToBoyPage() {
      this.router.navigate(['/boy-page']);
    }
}
