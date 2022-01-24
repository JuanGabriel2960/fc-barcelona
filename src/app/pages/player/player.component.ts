import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CMSService } from '../../services/cms.service';
import { Player } from '../../interfaces/main.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as ui from '../../components/ui.actions';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styles: []
})
export class PlayerComponent implements OnInit {
  player!: Player;
  _id: string | null;
  show: boolean = false;

  constructor(private CMS: CMSService, private activatedRoute: ActivatedRoute, private store: Store<AppState>) {
    this._id = activatedRoute.snapshot.paramMap.get('_id')
  }

  ngOnInit(): void {
    this.store.dispatch(ui.startLoader())

    this.CMS.getPlayer(this._id)
      .subscribe(resp => {
        this.player = resp
      }, (err) => {
        console.log(err)
      }).add(() => {
        this.store.dispatch(ui.stopLoader())
      })
  }

}
