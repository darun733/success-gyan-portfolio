import { Routes } from '@angular/router';
import { MyPivotPage } from './pages/my-pivot-page/my-pivot-page';
import { UntilWeWinPage } from './pages/until-we-win-page/until-we-win-page';
import { JoinTheForgePage } from './pages/join-the-forge-page/join-the-forge-page';

export const routes: Routes = [
//   { path: '', component: HomePage, pathMatch: 'full' },
  { path: '', component: UntilWeWinPage },
  { path: 'until-we-win', component: UntilWeWinPage },
  { path: 'my-pivot', component: MyPivotPage },
  { path: 'join-the-forge', component: JoinTheForgePage },

  // fallback
  { path: '**', redirectTo: '' },
];
