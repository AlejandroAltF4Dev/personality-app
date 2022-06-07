import { Component } from '@angular/core';
import { StoreQuery } from './state/store.query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Personality App';
  name$ = this.storeQuery.name$;
  constructor(private readonly storeQuery: StoreQuery) {}
}
