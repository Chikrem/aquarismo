import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fotos: any[] = [];
  fotos2: any[] = [];
  evento: any[] = [];
  lojas: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.http.get<any>('https://raw.githubusercontent.com/Chikrem/aquarismo/refs/heads/versao-teste/src/assets/dados.json').subscribe(data => {
    this.http.get<any>('/assets/dados.json').subscribe(data => {
      this.fotos = data.fotos;
      this.fotos2 = data.fotos2;
      this.lojas = data.lojas;
      this.evento = data.evento;
    });
  }


  bannerImages = [
    { src: 'assets/imagens/banner.svg', alt: 'Banner 1' },
    { src: 'assets/imagens/banner3.svg', alt: 'Banner 3' },
    { src: 'assets/imagens/banner2.svg', alt: 'Banner 2' },
    { src: 'assets/imagens/banner4.svg', alt: 'Banner 4' }
  ];

}
