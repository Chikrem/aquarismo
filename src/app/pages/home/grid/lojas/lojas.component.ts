import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lojas',
  templateUrl: './lojas.component.html',
  styleUrl: './lojas.component.scss'
})
export class LojasComponent {
  @Input() lojas: { src: string, link: string }[] = [];
}
