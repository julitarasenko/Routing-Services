import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { DetailsComponent } from './details/details.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'add', component: AddPersonComponent },
  { path: '**', component: ViewNotFoundComponent },
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
