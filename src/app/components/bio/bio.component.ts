import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
  @Input() show: boolean = false;
  @Input() name!: string;
  @Input() data_bio!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
