import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutModule } from './layouts/auth-layout/auth-layout.module';
import { MainLayoutModule } from './layouts/main-layout/main-layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppGuard } from './utils/guards/app.guard';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthLayoutModule,
    MainLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // NgxSpinnerModule
  ],
  providers: [AppGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
