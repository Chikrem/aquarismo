import { Component, AfterViewInit, NgZone, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
  parceiros = [
    { href: 'https://poytara.com/site-fora-do-ar.html', src: 'assets/parceiros/poytara.png' },
    { href: 'https://www.deltafish.com.br/', src: 'assets/parceiros/delta.png' },
    { href: 'https://nutricon.ind.br/', src: 'assets/parceiros/nutri.png' },
    { href: 'https://poytara.com/site-fora-do-ar.html', src: 'assets/parceiros/poytara.png' },
    { href: 'https://www.deltafish.com.br/', src: 'assets/parceiros/delta.png' },
    { href: 'https://nutricon.ind.br/', src: 'assets/parceiros/nutri.png' },
    { href: 'https://poytara.com/site-fora-do-ar.html', src: 'assets/parceiros/poytara.png' },
    { href: 'https://www.deltafish.com.br/', src: 'assets/parceiros/delta.png' },
    { href: 'https://nutricon.ind.br/', src: 'assets/parceiros/nutri.png' },
  ];

  currentIndex: number = 0;
  displayCount: number = 3;
  intervalTime: number = 3000;
  autoSlideInterval: any;

  constructor(private ngZone: NgZone, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Execute o intervalo fora da detecção de mudanças do Angular
      this.ngZone.runOutsideAngular(() => {
        this.startAutoSlide();
      });
    }
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.ngZone.run(() => {
        this.currentIndex = (this.currentIndex + this.displayCount) % this.parceiros.length;
      });
    }, this.intervalTime);
  }

  getTransform(): string {
    return `translateX(-${this.currentIndex * (100 / this.displayCount)}%)`;
  }

  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }
}
