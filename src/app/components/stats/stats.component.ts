import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styles: [
  ]
})
export class StatsComponent implements OnInit {
  @Input() title!: string;
  @Input() data!: string;
  @Input() color!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
