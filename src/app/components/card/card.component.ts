import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../interfaces/main.interface';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() player!: Player;
  BACKEND_URL: string = environment.BACKEND_URL;

  constructor() { }

  ngOnInit(): void { }

}
