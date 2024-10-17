import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent {
  @Input() produto: any;

  constructor(public dialog: MatDialog) { }

  openModal() {
    this.dialog.open(ModalComponent, {
      width: '900px',
      data: {
        context: 'produto',
        data: this.produto
      }
    });
  }
}
