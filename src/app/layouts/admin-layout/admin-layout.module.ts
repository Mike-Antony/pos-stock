import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { DeploymentsComponent } from '../../deployments/deployments.component';
import { TerminalsComponent } from '../../Terminals/terminals.component';
import { AddDeploymentComponent } from '../../add-deployment/add-deployment.component';
import { AddTerminalComponent } from '../../add-terminal/add-terminal.component';
import { UsersComponent} from '../../users/users.component';
import { LoginComponent} from '../../login/login.component';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    DeploymentsComponent,
    TerminalsComponent,
    AddDeploymentComponent,
    AddTerminalComponent,
    UsersComponent,
    LoginComponent,
  ]
})

export class AdminLayoutModule {}
