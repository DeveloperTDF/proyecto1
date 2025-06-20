import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports:[IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle],
  standalone: true,
})
export class CardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
