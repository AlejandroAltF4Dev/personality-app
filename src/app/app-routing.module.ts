import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'survey',
    loadChildren: () =>
      import('./features/survey/survey.module').then((m) => m.SurveyModule),
  },
  {
    path: 'results',
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
