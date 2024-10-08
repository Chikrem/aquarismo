import { Component } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {

  hobby = [
    { nome: 'JUMBOS', imagem: 'assets/cards/aro.png' },
    { nome: 'CASCUDOS', imagem: 'assets/cards/cascudo.png' },
    { nome: 'BETTAS', imagem: 'assets/cards/betta.png' },
    { nome: 'KINGUIOS', imagem: 'assets/cards/kinguio.png' },
    { nome: 'AFRICANOS', imagem: 'assets/cards/africano.png' },
    { nome: 'DISCOS', imagem: 'assets/cards/disco.png' },
    { nome: 'MARINHOS', imagem: 'assets/cards/marinho.png' },
    { nome: 'CRUSTÁCEOS', imagem: 'assets/cards/camarao.png' },
    { nome: 'ASIÁTICOS', imagem: 'assets/cards/asiaticos.png' }
  ];

}
