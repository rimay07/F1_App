import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { RaceYearService }  from './race-year/race-year.service';
import { RaceYearComponent }  from './race-year/race-year.component';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
	RaceYearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	NgbModule.forRoot(),
	HttpClientModule,
	NgxPaginationModule
  ],
  providers: [RaceYearService],
  bootstrap: [AppComponent]
})
export class AppModule { }
