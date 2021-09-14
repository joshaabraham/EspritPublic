import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { MatSidenavModule } from '@angular/material/sidenav/sidenav-module';



@NgModule({
  declarations: [NavigationComponent],
  exports:[NavigationComponent],
  imports: [
    CommonModule,
    MatSidenavModule
  ]
})
export class NavigationModule { }
