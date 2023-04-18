import { Component, Input } from '@angular/core';
import { SocialLinks } from '../../interfaces/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() titulo: string = "";
  @Input() descripcion: string = "";
  @Input() socialLinks: SocialLinks = {};
  @Input() bgImg: string = "";

}
