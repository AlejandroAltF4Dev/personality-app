import { Component, OnInit } from '@angular/core';
import { StoreQuery } from '../../../../state/store.query';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss'],
})
export class ResultsPageComponent implements OnInit {
  score$ = this.storeQuery.score$;
  constructor(private storeQuery: StoreQuery) {}

  ngOnInit(): void {}
}
