import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupMainComponent } from './components/group-main/group-main.component';
import { SutraComponent } from './components/sutra/sutra.component';
import { FormulasComponent } from './components/formulas/formulas.component';
import { AllSutrasComponent } from './components/all-sutras/all-sutras.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    GroupMainComponent,
    SutraComponent,
    FormulasComponent,
    AllSutrasComponent,
    NavbarComponent,
    UploadFileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MatSidenavModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
