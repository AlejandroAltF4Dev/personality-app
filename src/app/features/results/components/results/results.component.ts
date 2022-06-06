import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  @Input() score = 0;
  @Output() resetSurvey = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  reset() {
    this.resetSurvey.emit();
  }
}
