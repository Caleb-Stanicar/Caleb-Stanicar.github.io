import { Component, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-girl-page',
  templateUrl: './girl-page.component.html',
  styleUrls: ['./girl-page.component.css']
})
export class GirlPageComponent implements OnInit, OnDestroy {

  private explosionInterval: any;
  private timeout: any;
  message: string = "Sorry, not sure what that was...";

  constructor(private el: ElementRef, private renderer: Renderer2, private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.message = "Just kidding, GIRL PAGE!";
    }, 2000); // Change the message after 4 seconds
    this.explosionInterval = setInterval(this.createExplosion.bind(this), 1500);
    this.timeout = setTimeout(() => {
      this.navigateToGirlPage();
    }, 15000);
  }

  ngOnDestroy() {
    clearInterval(this.explosionInterval);
    clearTimeout(this.timeout); // Clear the timeout to prevent navigation if user leaves page early
  }

  getRandomImage() {
    const randomIndex = Math.floor(Math.random() * 6) + 1; // Assuming you have 3 images
    return `assets/girl-page/image${randomIndex}.png`;
  }

  createExplosion() {
    const explosion = this.renderer.createElement('div');
    this.renderer.addClass(explosion, 'explosion');
    this.renderer.setStyle(explosion, 'left', `${Math.random() * 50}vw`);
    this.renderer.setStyle(explosion, 'top', `${Math.random() * 50}vh`);

    const randomImage = this.getRandomImage();
    this.renderer.setStyle(explosion, 'background-image', `url(${randomImage})`);

    this.renderer.appendChild(this.el.nativeElement, explosion);

    setTimeout(() => {
      this.renderer.removeChild(this.el.nativeElement, explosion);
    }, 10000); // Remove explosion after 1 second
  }

  navigateToGirlPage() {
    this.router.navigate(['/brought-you-here']);
  }

}
