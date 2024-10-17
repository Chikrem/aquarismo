import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{


  fotos = [

    { src: 'assets/eventos/evento.png' },
    { src: 'assets/eventos/evento1.jpeg' },
    { src: 'assets/eventos/evento2.jpeg' },
    { src: 'assets/eventos/evento3.jpeg' }

    // Adicione mais imagens conforme necessário
  ];

  fotos2 = [

    { src: 'https://raw.githubusercontent.com/Chikrem/aquarismo/refs/heads/main/src/assets/galeria/a.jpeg' },
    { src: 'https://raw.githubusercontent.com/Chikrem/aquarismo/refs/heads/main/src/assets/galeria/c.jpeg' },
    { src: 'https://raw.githubusercontent.com/Chikrem/aquarismo/refs/heads/main/src/assets/galeria/b.jpeg' },
    { src: 'https://raw.githubusercontent.com/Chikrem/aquarismo/refs/heads/main/src/assets/galeria/d.jpeg' }

    // Adicione mais imagens conforme necessári
  ];

  bannerImages = [
    { src: 'assets/imagens/banner.svg', alt: 'Banner 1' },
    { src: 'assets/imagens/banner3.svg', alt: 'Banner 3' },
    { src: 'assets/imagens/banner2.svg', alt: 'Banner 2' },
    { src: 'assets/imagens/banner4.svg', alt: 'Banner 4' }
  ];

}
