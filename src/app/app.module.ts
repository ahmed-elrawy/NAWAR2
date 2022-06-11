import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { ProfileComponent } from './modules/user/profile/profile.component';
import { ItemDetailsComponent } from './modules/app/item-details/item-details.component';
import { ItemsComponent } from './modules/app/items/items.component';
import { CreateItemComponent } from './modules/app/create-item/create-item.component';
import { HomeComponent } from './modules/app/home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './shared/components/interceptors/token.interceptor';
import { AdminPanelComponent } from './modules/app/admin-panel/admin-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ItemDetailsComponent,
    ItemsComponent,
    CreateItemComponent,
    HomeComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [
        {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
