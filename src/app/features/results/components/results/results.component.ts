import { Component, Input, OnInit } from '@angular/core';
import { StoreService } from '../../../../state/store.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  @Input() score = 0;
  constructor(private storeService: StoreService) {}

  ngOnInit(): void {}

  reset() {
    this.storeService.resetStore();
  }
}
