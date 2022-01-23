import { Component, OnInit } from '@angular/core';
import { CMSService } from '../../services/cms.service';
import { Group } from '../../interfaces/main.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: []
})
export class MainComponent implements OnInit {
  groups!: Group[]

  constructor(private CMS: CMSService) { }

  ngOnInit(): void {
    this.CMS.getMain()
      .subscribe(resp => {
        this.groups = resp.group
      }, (err) => {
        console.log(err)
      })
  }

}
