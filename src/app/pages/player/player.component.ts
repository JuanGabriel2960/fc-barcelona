import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CMSService } from '../../services/cms.service';
import { Player } from '../../interfaces/main.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as ui from '../../components/ui.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styles: []
})
export class PlayerComponent implements OnInit, OnDestroy {
  player!: Player;
  darkmode!: boolean;
  _id: string | null;
  _subscription!: Subscription;

  constructor(private CMS: CMSService, private activatedRoute: ActivatedRoute, private store: Store<AppState>) {
    this._id = activatedRoute.snapshot.paramMap.get('_id')
  }

  ngOnInit(): void {
    this._subscription = this.store.select('ui')
      .subscribe(ui => {
        this.darkmode = ui.darkmode
      })

    this.CMS.getPlayer(this._id)
      .subscribe(resp => {
        this.player = resp
      }, (err) => {
        console.log(err)
      })
  }

  ngOnDestroy(): void {
    this.store.dispatch(ui.closeModal())
  }

  openModal() {
    this.store.dispatch(ui.openModal())
  }

}
