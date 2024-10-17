// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-banner',
//   templateUrl: './banner.component.html',
//   styleUrls: ['./banner.component.scss']
// })
// export class BannerComponent {
//   @Input() src: string = '';
//   @Input() alt: string = '';
// }

import { Component, Input, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() images: { src: string, alt: string }[] = [];
  currentImageIndex = 0;
  intervalId: any;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    // Executa o intervalo fora da zona do Angular para evitar o timeout
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => {
          this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        });
      }, 3000);
    });
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Limpa o intervalo ao destruir o componente
    }
  }

  getCurrentImage() {
    return this.images[this.currentImageIndex];
  }
}
