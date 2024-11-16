import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{


  fotos = [

    { src: 'assets/eventos/evento.jpeg' },
    { src: 'assets/eventos/evento1.jpeg' },
    { src: 'assets/eventos/evento2.jpeg' },
    { src: 'assets/eventos/evento3.jpeg' }

    // Adicione mais imagens conforme necessário
  ];

  fotos2 = [

    { src: 'assets/galeria/a.jpeg' },
    { src: 'assets/galeria/b.jpeg' },
    { src: 'assets/galeria/c.jpeg' },
    { src: 'assets/galeria/d.jpeg' }
    // Adicione mais imagens conforme necessário
  ];

  lojas = [

    { src: 'assets/lojas/loja1.jpeg', link: 'https://www.instagram.com/loureiroaquarismo/' },
    { src: 'assets/lojas/loja2.jpeg', link: 'https://www.instagram.com/triboaquarismo/' },
    { src: 'assets/lojas/loja3.jpeg', link: 'https://www.instagram.com/meiornamentais/' },
    { src: 'assets/lojas/loja4.jpeg', link: 'www.google.com.br/maps' },
    { src: 'assets/lojas/loja5.jpeg', link: 'https://www.instagram.com/_aquagomes/' },
    { src: 'assets/lojas/loja6.jpeg', link: 'https://www.instagram.com/ibpeixesornamentais/' },
    { src: 'assets/lojas/loja7.jpeg', link: 'https://www.instagram.com/bia.petstore/' },
    { src: 'assets/lojas/loja8.jpeg', link: 'http://www.mareaquarismolojavirtual.com.br/' },
    { src: 'assets/lojas/loja9.jpeg', link: 'https://www.instagram.com/habitat_pet/' },
    { src: 'assets/lojas/loja10.jpeg', link: 'www.google.com.br/maps' },
    { src: 'assets/lojas/loja11.jpeg', link: 'https://www.instagram.com/aquaranza/' },
    { src: 'assets/lojas/loja12.jpeg', link: 'https://www.instagram.com/oscarfish.05/' },
    { src: 'assets/lojas/loja13.jpeg', link: 'https://www.instagram.com/wilsonaquarismo/' },
    { src: 'assets/lojas/loja14.jpeg', link: 'https://www.instagram.com/fandipeixe/?hl=pt-br' }
    
    // Adicione mais imagens conforme necessário
  ];


  // fotos2 = [

  //   { src: 'https://raw.githubusercontent.com/Chikrem/aquarismo/refs/heads/main/src/assets/galeria/a.jpeg' },
  //   { src: 'https://raw.githubusercontent.com/Chikrem/aquarismo/refs/heads/main/src/assets/galeria/c.jpeg' },
  //   { src: 'https://raw.githubusercontent.com/Chikrem/aquarismo/refs/heads/main/src/assets/galeria/b.jpeg' },
  //   { src: 'https://raw.githubusercontent.com/Chikrem/aquarismo/refs/heads/main/src/assets/galeria/d.jpeg' }

  //   // Adicione mais imagens conforme necessári
  // ];

  bannerImages = [
    { src: 'assets/imagens/banner.svg', alt: 'Banner 1' },
    { src: 'assets/imagens/banner3.svg', alt: 'Banner 3' },
    { src: 'assets/imagens/banner2.svg', alt: 'Banner 2' },
    { src: 'assets/imagens/banner4.svg', alt: 'Banner 4' }
  ];

}
