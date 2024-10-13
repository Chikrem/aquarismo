import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.component.html',
  styleUrl: './parceiros.component.scss'
})
export class ParceirosComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() href: string = '';
}
