import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Subscription } from 'rxjs';
import * as ui from '../ui.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  @Input() facebook!: string;
  @Input() twitter!: string;
  @Input() instagram!: string;
  darkmode!: boolean;
  _subscription!: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this._subscription = this.store.select('ui')
      .subscribe(ui => {
        this.darkmode = ui.darkmode
      })
  }

  toggleDarkMode() {
    if (this.darkmode) {
      this.store.dispatch(ui.unsetDarkMode())
      localStorage.setItem('darkmode','false')
    } else {
      this.store.dispatch(ui.setDarkMode())
      localStorage.setItem('darkmode','true')
    }
  }

}
