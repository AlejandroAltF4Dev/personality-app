import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from './shared/guards/logged-in.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'survey',
    canLoad: [LoggedInGuard],
    loadChildren: () =>
      import('./features/survey/survey.module').then((m) => m.SurveyModule),
  },
  {
    path: 'results',
    canLoad: [LoggedInGuard],
    loadChildren: () =>
      import('./features/results/results.module').then((m) => m.ResultsModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
