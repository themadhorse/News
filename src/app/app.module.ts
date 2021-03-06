import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { VerticalCardListComponent } from './vertical-card-list/vertical-card-list.component';
import { HorizontalCardListComponent } from './horizontal-card-list/horizontal-card-list.component';
import { PopupComponent } from './popup/popup.component';
import { FeedbackComponent } from './feedback/feedback.component';

import { SearchFilterPipe } from './feedback/search-filter.pipe';

import { ClickOutsideDirective } from './feedback/click-outside.directive';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    VerticalCardListComponent,
    HorizontalCardListComponent,
    PopupComponent,
    FeedbackComponent,
    SearchFilterPipe,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
