import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent {

  currentSlide = 0;


  produtos = [
    { nome: 'Camisa Fundo do Mar 1', valor: '50', imagem: 'assets/produtos/mod1.png' },
    { nome: 'Camisa Fundo do Mar 2', valor: '50', imagem: 'assets/produtos/mod2.png' },
    { nome: 'Camisa Fundo do Mar 3', valor: '50', imagem: 'assets/produtos/mod3.png' },
    { nome: 'Camisa Fundo do Mar 1', valor: '50', imagem: 'assets/produtos/mod1.png' },
    { nome: 'Camisa Fundo do Mar 2', valor: '50', imagem: 'assets/produtos/mod2.png' },
    { nome: 'Camisa Fundo do Mar 3', valor: '50', imagem: 'assets/produtos/mod3.png' },
    { nome: 'Camisa Fundo do Mar 2', valor: '50', imagem: 'assets/produtos/mod2.png' },
    { nome: 'Camisa Fundo do Mar 3', valor: '50', imagem: 'assets/produtos/mod3.png' },
    { nome: 'Camisa Fundo do Mar 1', valor: '50', imagem: 'assets/produtos/mod1.png' },
    { nome: 'Camisa Fundo do Mar 2', valor: '50', imagem: 'assets/produtos/mod2.png' },
    { nome: 'Camisa Fundo do Mar 3', valor: '50', imagem: 'assets/produtos/mod3.png' }
  ];

  slideCount = this.produtos.length;
  visibleCards = 0; // Número de cartões visíveis no carrossel

  // Método para ir ao slide anterior
  prev() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.updateCarousel();
    }
  }

  // Método para ir ao próximo slide
  next() {
    if (this.currentSlide < this.slideCount - this.visibleCards) {
      this.currentSlide++;
      this.updateCarousel();
    }
  }

  // Atualiza a posição do carrossel
  updateCarousel() {
    const carrossel = document.querySelector('.carrossel') as HTMLElement;
    carrossel.style.transform = `translateX(-${this.currentSlide * 520}px)`;
  }

  // Verifica se o botão 'prev' deve ser desabilitado
  isPrevDisabled() {
    return this.currentSlide === 0;
  }

  // Verifica se o botão 'next' deve ser desabilitado, considerando 2 cartões antes do final
  isNextDisabled() {
    return this.currentSlide >= this.slideCount - this.visibleCards;
  }
}
