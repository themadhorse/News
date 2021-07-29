import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorizontalCardListComponent } from './horizontal-card-list/horizontal-card-list.component';
import { VerticalCardListComponent } from './vertical-card-list/vertical-card-list.component';

const routes: Routes = [
  {path: "list", component: VerticalCardListComponent},
  {path: "card", component: HorizontalCardListComponent},
  {path: "", redirectTo: '/list', pathMatch: 'full'},
  {path: "**", redirectTo: '/list'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
