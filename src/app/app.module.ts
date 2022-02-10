import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing, AppRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

//componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AltaComponent } from './alta/alta.component';
import { RegistroComponent } from './registro/registro.component';
import { ReporteComponent } from './reporte/reporte.component';
import { FooterComponent } from './include/footer/footer.component';
import { HeaderComponent } from './include/header/header.component';


/////////

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { FieldsetModule} from "primeng/fieldset"; // <----
import {TableModule} from 'primeng/table';

import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';

import { environment } from '../environments/environment';
import { AltaComisionComponent } from './alta-comision/alta-comision.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    AltaComponent,
    RegistroComponent,
    ReporteComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    AltaComisionComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    routing,
    HttpClientModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    FieldsetModule, 
    TableModule


  ],
  exports: [
    FieldsetModule,
    TableModule

  ],
  providers: [
    AppRoutingProviders,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
