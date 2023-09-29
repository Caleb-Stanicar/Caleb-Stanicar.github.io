import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-final-page',
  templateUrl: './final-page.component.html',
  styleUrls: ['./final-page.component.css']
})
export class FinalPageComponent implements OnInit {

  currentStep: number = 0;
  currentText: string = "Alright, fuck it, I'll tell you what you're getting for your birthday.";
  currentImage: string = "";

  showImage: boolean = false;

  ngOnInit() {
    setTimeout(() => this.updateText(), 3000);
  }

  updateText() {
    switch (this.currentStep) {
      case 0:
        this.currentText = "what you're getting for your birthday...";
        this.currentStep++;
        setTimeout(() => this.updateText(), 2000);
        break;
      case 1:
        this.currentText = "Is...";
        this.currentStep++;
        setTimeout(() => this.updateText(), 2000);
        break;
      case 2:
        this.currentText = "Two plane tickets, baby!";
        this.currentStep++;
        setTimeout(() => this.updateText(), 2000);
        break;
      case 3:
        this.currentText = "To";
        this.currentStep++;
        setTimeout(() => this.updateText(), 350);
        break;
      case 4:
        this.currentText = "Wherever";
        this.currentStep++;
        setTimeout(() => this.updateText(), 350);
        break;
      case 5:
        this.currentText = "The";
        this.currentStep++;
        setTimeout(() => this.updateText(), 350);
        break;
      case 6:
        this.currentText = "Hell";
        this.currentStep++;
        setTimeout(() => this.updateText(), 350);
        break;
      case 7:
        this.currentText = "You";
        this.currentStep++;
        setTimeout(() => this.updateText(), 350);
        break;
      case 8:
        this.currentText = "Want";
        this.currentStep++;
        setTimeout(() => this.updateText(), 350);
        break;
      case 9:
        this.currentText = "To";
        this.currentStep++;
        setTimeout(() => this.updateText(), 350);
        break;
      case 10:
        this.currentText = "Go!";
        this.currentStep++;
        setTimeout(() => this.updateText(), 1500);
        break;
      case 11:
        this.currentText = "I'm talking...";
        this.currentImage = "";
        this.currentStep++;
        setTimeout(() => this.updateText(), 1000);
        break;
      case 12:
        this.currentText = "Japan!";
        this.currentImage = "assets/japan.jpg";
        this.showImage = true;
        this.currentStep++;
        setTimeout(() => this.updateText(), 1000);
        break;
      case 13:
        this.showImage = false;
        this.currentText = "I'm talking...";
        this.currentStep++;
        setTimeout(() => this.updateText(), 500);
        break;
      case 14:
        this.currentText = "Cancun!";
        this.currentImage = "assets/cancun.jpg";
        this.showImage = true;
        this.currentStep++;
        setTimeout(() => this.updateText(), 1000);
        break;
      case 15:
        this.showImage = false;
        this.currentText = "I'm talking...";
        this.currentStep++;
        setTimeout(() => this.updateText(), 500);
        break;
      case 16:
        this.currentText = "Hawaii!";
        this.currentImage = "assets/hawaii.jfif";
        this.showImage = true;
        this.currentStep++;
        setTimeout(() => this.updateText(), 3000);
        break;
      case 17:
        this.currentImage = "assets/arkansas.jpg";
        this.showImage = true;
        this.currentText = "We could even go to Arkansas if you want???";
        this.currentStep++;
        setTimeout(() => this.updateText(), 4000);
        break;
      case 18:
        this.currentImage = "assets/cat.jpg";
        this.showImage = true;
        this.currentText = "I Love you and Happy Birthday! (you're this cat)";
        setTimeout(() => this.updateText(), 4000);
        break;
    }
  }
}
