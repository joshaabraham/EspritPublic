import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HorizontalLayoutComponent } from './pages/horizontal-layout/horizontal-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VerticalLayoutComponent } from './pages/vertical-layout/vertical-layout.component';
import { NavigationComponent } from './composants/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HorizontalLayoutComponent,
    VerticalLayoutComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
