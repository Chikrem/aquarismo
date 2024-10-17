import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  context: string;
  data: any;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any) {
    this.context = dialogData.context;
    this.data = dialogData.data;
  }
}
