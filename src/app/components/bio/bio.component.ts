import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../../app.reducer';
import * as ui from '../../components/ui.actions';


@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit, OnDestroy {
  @Input() name!: string;
  @Input() data_bio!: string;

  show: boolean = false;
  _subscription!: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this._subscription = this.store.select('ui')
      .subscribe(ui => {
        this.show = ui.modal
      })
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe()
  }

  closeModal(){
    this.store.dispatch(ui.closeModal())
  }

}
