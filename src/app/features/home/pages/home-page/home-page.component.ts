import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../../state/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private storeService: StoreService, private router: Router) {}

  ngOnInit(): void {}

  startSurvey({ name }: { name: string }) {
    this.storeService.updateName(name as string);
    this.router.navigate(['/survey']);
  }
}
