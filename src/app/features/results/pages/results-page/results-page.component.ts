import { Component, OnInit } from '@angular/core';
import { StoreQuery } from '../../../../state/store.query';
import { StoreService } from '../../../../state/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss'],
})
export class ResultsPageComponent implements OnInit {
  score$ = this.storeQuery.score$;
  constructor(
    private storeQuery: StoreQuery,
    private router: Router,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {}

  reset() {
    this.storeService.resetStore();
    this.router.navigate(['/home']);
  }
}
