import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styles: [
  ]
})
export class HighlightsComponent implements OnInit {
  @Input() url!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
