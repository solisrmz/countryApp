import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Error404Component } from './error404/error404.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarComponent, Error404Component],
  imports: [
    CommonModule, 
    RouterModule
  ],
  exports: [SidebarComponent, Error404Component]
})
export class SharedModule { }
