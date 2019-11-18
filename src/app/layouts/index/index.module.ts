import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent} from '../../login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatRippleModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTooltipModule } from '@angular/material';
import { IndexRoutes } from './index.routing';
import {AppModule} from '../../app.module';

@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forChild(IndexRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],declarations: [
    LoginComponent,
  ]
})
export class IndexModule { }
