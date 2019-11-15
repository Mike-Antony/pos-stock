import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TerminalsComponent } from '../../Terminals/terminals.component';
import { DeploymentsComponent } from '../../deployments/deployments.component';
import { AddDeploymentComponent } from '../../add-deployment/add-deployment.component';
import { AddTerminalComponent } from '../../add-terminal/add-terminal.component';
import { UsersComponent } from '../../users/users.component';
import { LoginComponent} from '../../login/login.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'terminals', component: TerminalsComponent },
    { path: 'deployments', component: DeploymentsComponent },
    { path: 'add-deployment', component: AddDeploymentComponent },
    { path: 'add-terminal', component: AddTerminalComponent },
    { path: 'users', component: UsersComponent},
    { path: 'login', component: LoginComponent},
];
