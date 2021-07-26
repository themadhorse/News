import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerticalCardListComponent } from './vertical-card-list/vertical-card-list.component';

const routes: Routes = [
  {path: "list-view", component: VerticalCardListComponent},
  {path: "", redirectTo: '/list-view', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
