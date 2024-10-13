import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Input() hobby: any; // Recebe um objeto hobby

  constructor(public dialog: MatDialog) { }

  // Método que será chamado ao clicar no botão para abrir o modal
  openModal() {
    this.dialog.open(ModalComponent, {
      width: '400px',
      data: this.hobby // Passa o objeto hobby para o modal
    });
  }
}
