import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDatabaseService} from './services/tests/in-memory-database.service';
import {environment} from '../environments/environment';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import {HttpClientModule} from '@angular/common/http';
import {httpInterceptorProviders} from './interceptors';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    !environment.production ? HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabaseService, { delay: 0, passThruUnknownUrl: true}) : [],
    environment.production ? [] : AkitaNgDevtools.forRoot(),
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
