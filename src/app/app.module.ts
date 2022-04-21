import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateAgoPipe } from './date-ago.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { ColorDirective } from './color.directive';
import { HttpClientModule } from '@angular/common/http';
import { UserFetchService } from './user-fetch.service';
@NgModule({
  declarations: [
    AppComponent,
    DateAgoPipe,
    PageNotFoundComponent,
    UserComponent,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserFetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
