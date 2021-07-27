import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { VerticalCardListComponent } from './vertical-card-list/vertical-card-list.component';
import { HorizontalCardListComponent } from './horizontal-card-list/horizontal-card-list.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    VerticalCardListComponent,
    HorizontalCardListComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
