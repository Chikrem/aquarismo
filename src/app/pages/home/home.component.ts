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

    { src: 'https://raw.githubusercontent.com/Chikrem/aquarismo/refs/heads/main/src/assets/galeria/foto1.jpg' },
    { src: 'https://raw.githubusercontent.com/Chikrem/aquarismo/refs/heads/main/src/assets/galeria/foto2.jpg' },
    { src: 'https://raw.githubusercontent.com/Chikrem/aquarismo/refs/heads/main/src/assets/galeria/foto3.jpg' },
    { src: 'https://raw.githubusercontent.com/Chikrem/aquarismo/refs/heads/main/src/assets/galeria/foto4.jpg' }

    // Adicione mais imagens conforme necessário
  ];



}
