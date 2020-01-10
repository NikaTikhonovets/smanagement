import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { CommonComponentsModule } from './common/common.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule( {
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonComponentsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatSidenavModule,
    HttpClientModule,
    RouterModule.forRoot( [ ...APP_ROUTES ] ),
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
