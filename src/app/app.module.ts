import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AuthLayoutModule } from './layouts/auth-layout/auth-layout.module';
import { MainLayoutModule } from './layouts/main-layout/main-layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderInfoComponent } from './components/header-info/header-info.component';
import { SearchInfoComponent } from './components/search-info/search-info.component';
import { SearchBtnComponent } from './components/search-btn/search-btn.component';
import { AppGuard } from './utils/guards/app.guard';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthLayoutModule,
    MainLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [AppGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
