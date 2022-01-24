import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  _subscription!: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this._subscription = this.store.select('ui')
      .subscribe(ui => {
        this.loading = ui.loading
        console.log('sus')
      })
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe()
  }

}
