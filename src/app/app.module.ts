import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ListComponent } from './components/list/list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateUserFormComponent } from './components/create-user-form/create-user-form.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ListComponent,
    HeaderComponent,
    FooterComponent,
    CreateUserFormComponent,
    VehicleDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
