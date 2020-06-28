import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SiComponent } from './si/si.component';
import { TaComponent } from './ta/ta.component';
import { EnComponent } from './en/en.component';
import { ParaComponent } from './para/para.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SiComponent,
    TaComponent,
    EnComponent,
    ParaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
