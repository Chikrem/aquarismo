import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent {

  currentSlide = 0;


  produtos = [
    { nome: 'Camisa Fundo do Mar 1', valor: '50', imagem: 'assets/produtos/mod1.png', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at nisi at lorem aliquam gravida. Ut at viverra lacus. Mauris aliquet vehicula sapien, ac faucibus lectus maximus in. Curabitur volutpat lacus ut nunc suscipit, sit amet facilisis nisi pulvinar. Suspendisse potenti. Aliquam a eros venenatis, consequat arcu at, scelerisque tortor. Fusce ac sem sapien. Duis at consectetur felis, ac consequat ex. Integer ornare ph'},
    { nome: 'Camisa Fundo do Mar 2', valor: '50', imagem: 'assets/produtos/mod2.png' , descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at nisi at lorem aliquam gravida. Ut at viverra lacus. Mauris aliquet vehicula sapien, ac faucibus lectus maximus in. Curabitur volutpat lacus ut nunc suscipit, sit amet facilisis nisi pulvinar. Suspendisse potenti. Aliquam a eros venenatis, consequat arcu at, scelerisque tortor. Fusce ac sem sapien. Duis at consectetur felis, ac consequat ex. Integer ornare ph'},
    { nome: 'Camisa Fundo do Mar 3', valor: '50', imagem: 'assets/produtos/mod3.png' , descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at nisi at lorem aliquam gravida. Ut at viverra lacus. Mauris aliquet vehicula sapien, ac faucibus lectus maximus in. Curabitur volutpat lacus ut nunc suscipit, sit amet facilisis nisi pulvinar. Suspendisse potenti. Aliquam a eros venenatis, consequat arcu at, scelerisque tortor. Fusce ac sem sapien. Duis at consectetur felis, ac consequat ex. Integer ornare ph'},
    { nome: 'Camisa Fundo do Mar 1', valor: '50', imagem: 'assets/produtos/mod1.png' , descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at nisi at lorem aliquam gravida. Ut at viverra lacus. Mauris aliquet vehicula sapien, ac faucibus lectus maximus in. Curabitur volutpat lacus ut nunc suscipit, sit amet facilisis nisi pulvinar. Suspendisse potenti. Aliquam a eros venenatis, consequat arcu at, scelerisque tortor. Fusce ac sem sapien. Duis at consectetur felis, ac consequat ex. Integer ornare ph'},
    { nome: 'Camisa Fundo do Mar 2', valor: '50', imagem: 'assets/produtos/mod2.png' , descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at nisi at lorem aliquam gravida. Ut at viverra lacus. Mauris aliquet vehicula sapien, ac faucibus lectus maximus in. Curabitur volutpat lacus ut nunc suscipit, sit amet facilisis nisi pulvinar. Suspendisse potenti. Aliquam a eros venenatis, consequat arcu at, scelerisque tortor. Fusce ac sem sapien. Duis at consectetur felis, ac consequat ex. Integer ornare ph'},
    { nome: 'Camisa Fundo do Mar 3', valor: '50', imagem: 'assets/produtos/mod3.png' , descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at nisi at lorem aliquam gravida. Ut at viverra lacus. Mauris aliquet vehicula sapien, ac faucibus lectus maximus in. Curabitur volutpat lacus ut nunc suscipit, sit amet facilisis nisi pulvinar. Suspendisse potenti. Aliquam a eros venenatis, consequat arcu at, scelerisque tortor. Fusce ac sem sapien. Duis at consectetur felis, ac consequat ex. Integer ornare ph'},
    { nome: 'Camisa Fundo do Mar 2', valor: '50', imagem: 'assets/produtos/mod2.png' , descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at nisi at lorem aliquam gravida. Ut at viverra lacus. Mauris aliquet vehicula sapien, ac faucibus lectus maximus in. Curabitur volutpat lacus ut nunc suscipit, sit amet facilisis nisi pulvinar. Suspendisse potenti. Aliquam a eros venenatis, consequat arcu at, scelerisque tortor. Fusce ac sem sapien. Duis at consectetur felis, ac consequat ex. Integer ornare ph'},
    { nome: 'Camisa Fundo do Mar 3', valor: '50', imagem: 'assets/produtos/mod3.png' , descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at nisi at lorem aliquam gravida. Ut at viverra lacus. Mauris aliquet vehicula sapien, ac faucibus lectus maximus in. Curabitur volutpat lacus ut nunc suscipit, sit amet facilisis nisi pulvinar. Suspendisse potenti. Aliquam a eros venenatis, consequat arcu at, scelerisque tortor. Fusce ac sem sapien. Duis at consectetur felis, ac consequat ex. Integer ornare ph'},
    { nome: 'Camisa Fundo do Mar 1', valor: '50', imagem: 'assets/produtos/mod1.png' , descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at nisi at lorem aliquam gravida. Ut at viverra lacus. Mauris aliquet vehicula sapien, ac faucibus lectus maximus in. Curabitur volutpat lacus ut nunc suscipit, sit amet facilisis nisi pulvinar. Suspendisse potenti. Aliquam a eros venenatis, consequat arcu at, scelerisque tortor. Fusce ac sem sapien. Duis at consectetur felis, ac consequat ex. Integer ornare ph'},
    { nome: 'Camisa Fundo do Mar 2', valor: '50', imagem: 'assets/produtos/mod2.png' , descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at nisi at lorem aliquam gravida. Ut at viverra lacus. Mauris aliquet vehicula sapien, ac faucibus lectus maximus in. Curabitur volutpat lacus ut nunc suscipit, sit amet facilisis nisi pulvinar. Suspendisse potenti. Aliquam a eros venenatis, consequat arcu at, scelerisque tortor. Fusce ac sem sapien. Duis at consectetur felis, ac consequat ex. Integer ornare ph'},
    { nome: 'Camisa Fundo do Mar 3', valor: '50', imagem: 'assets/produtos/mod3.png',  descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at nisi at lorem aliquam gravida. Ut at viverra lacus. Mauris aliquet vehicula sapien, ac faucibus lectus maximus in. Curabitur volutpat lacus ut nunc suscipit, sit amet facilisis nisi pulvinar. Suspendisse potenti. Aliquam a eros venenatis, consequat arcu at, scelerisque tortor. Fusce ac sem sapien. Duis at consectetur felis, ac consequat ex. Integer ornare ph'}
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

  updateCarousel() {
    const carrossel = document.querySelector('.carrossel') as HTMLElement;

    // Detecta a largura da tela
    const screenWidth = window.innerWidth;

    // Define a largura do card com base na resolução da tela
    let cardWidth: number;

    if (screenWidth <= 428) {
      // Se a tela for menor ou igual a 428px, ajusta a largura dos cards para 200px
      cardWidth = 210;
    } else {
      // Largura padrão dos cards para telas maiores
      cardWidth = 520;
    }

    // Atualiza a posição do carrossel com base na largura dinâmica do card
    carrossel.style.transform = `translateX(-${this.currentSlide * cardWidth}px)`;
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
