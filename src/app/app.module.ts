import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { AddPersonComponent } from './add-person/add-person.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

@NgModule({
  imports: [AppRoutingModule, BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    AddPersonComponent,
    DetailsComponent,
    ListComponent,
    ViewNotFoundComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
