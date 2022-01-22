import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../interfaces/main.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() player!: Player;

  constructor() { }

  ngOnInit(): void {
  }

}
