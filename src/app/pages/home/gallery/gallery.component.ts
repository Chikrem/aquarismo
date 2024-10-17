import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageZoomModalComponent } from './image-zoom-modal/image-zoom-modal.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  @Input() fotos: { src: string }[] = [];
  @Input() fotos2: { src: string }[] = [];

  constructor(public dialog: MatDialog) {}

  openZoomModal(fotoSrc: string) {
    this.dialog.open(ImageZoomModalComponent, {
      data: { src: fotoSrc },
      panelClass: 'full-screen-modal',
      height: '70vh',
      maxWidth: '90vw',
      width: '100%',
    });
  }
}
