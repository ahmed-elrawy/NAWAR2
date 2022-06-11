import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './modules/app/admin-panel/admin-panel.component';
import { CreateItemComponent } from './modules/app/create-item/create-item.component';
import { HomeComponent } from './modules/app/home/home.component';
import { ItemDetailsComponent } from './modules/app/item-details/item-details.component';
import { ItemsComponent } from './modules/app/items/items.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { ProfileComponent } from './modules/user/profile/profile.component';
import { AuthGuard } from './shared/gards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'register',
    component:RegisterComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'profile',
    component:ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'items',
    component:ItemsComponent
  },
  {
    path: 'details/:id',
    component:ItemDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
  path: 'create',
    component:CreateItemComponent,
    canActivate: [AuthGuard]

  },{
    path:'Admin',
    component: AdminPanelComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
