import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModuleComponent } from './auth-module/auth-module.component';



@NgModule({
  declarations: [
    AuthModuleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuthModuleComponent
  ]
})
export class UserModule { }
