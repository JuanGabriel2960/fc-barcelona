import { Component, OnInit } from '@angular/core';
import { CMSService } from '../../services/cms.service';
import { Group } from '../../interfaces/main.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as ui from '../../components/ui.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: []
})
export class MainComponent implements OnInit {
  groups!: Group[]

  constructor(private CMS: CMSService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(ui.startLoader())

    this.CMS.getMain()
      .subscribe(resp => {
        this.groups = resp.group
      }, (err) => {
        console.log(err)
      }).add(() => {
        this.store.dispatch(ui.stopLoader())
      })
  }

}
