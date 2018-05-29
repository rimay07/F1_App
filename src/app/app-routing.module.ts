/** 
*  Routing Module
*  Controls the chat main Routes when clicking a link
**/
//Libraries to import to run the App
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaceYearComponent } from './race-year/race-year.component';

// Define Paths Here
const routes: Routes = [{ path:'race/:id', component:RaceYearComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
