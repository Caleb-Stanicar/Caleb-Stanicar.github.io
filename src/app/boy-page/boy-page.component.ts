import { Component, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boy-page',
  templateUrl: './boy-page.component.html',
  styleUrls: ['./boy-page.component.css']
})
export class BoyPageComponent implements OnInit, OnDestroy {

  private explosionInterval: any;
  private timeout: any;

  constructor(private el: ElementRef, private renderer: Renderer2, private router: Router) { }

  ngOnInit() {
    this.explosionInterval = setInterval(this.createExplosion.bind(this), 500);
    this.timeout = setTimeout(() => {
      this.navigateToGirlPage();
    }, 15000); // Navigate to Girl Page after 15 seconds
  }

  ngOnDestroy() {
    clearInterval(this.explosionInterval);
    clearTimeout(this.timeout); // Clear the timeout to prevent navigation if user leaves page early
  }

  getRandomImage() {
    const randomIndex = Math.floor(Math.random() * 6) + 1; // Assuming you have 3 images
    return `assets/boy-page/image${randomIndex}.png`;
  }


  createExplosion() {
    const explosion = this.renderer.createElement('div');
    this.renderer.addClass(explosion, 'explosion');
    this.renderer.setStyle(explosion, 'left', `${Math.random() * 70}vw`);
    this.renderer.setStyle(explosion, 'top', `${Math.random() * 70}vh`);

    const randomImage = this.getRandomImage();
    this.renderer.setStyle(explosion, 'background-image', `url(${randomImage})`);

    this.renderer.appendChild(this.el.nativeElement, explosion);

    setTimeout(() => {
      this.renderer.removeChild(this.el.nativeElement, explosion);
    }, 10000); // Remove explosion after 1 second
  }

  navigateToGirlPage() {
    this.router.navigate(['/girl-page']);
  }


}
