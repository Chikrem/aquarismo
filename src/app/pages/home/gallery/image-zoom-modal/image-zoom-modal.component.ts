import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-zoom-modal',
  templateUrl: './image-zoom-modal.component.html',
  styleUrls: ['./image-zoom-modal.component.scss']
})
export class ImageZoomModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ImageZoomModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { src: string }
  ) {}

  // Método que fecha o modal ao clicar na imagem
  closeModal() {
    this.dialogRef.close();
  }
}
