import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { GreetingComponent } from './components/greeting/greeting.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomePageComponent, GreetingComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbButtonModule,
    NbCardModule,
    ReactiveFormsModule,
    NbInputModule,
  ],
})
export class HomeModule {}
