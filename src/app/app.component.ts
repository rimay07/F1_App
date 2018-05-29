/** 
*  Application Component
*  Main component that loads all the main page
**/

//Libraries to import to run the App

import { Component } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { RaceYear, RaceYearService }  from './race-year/race-year.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	raceYear$: Observable<RaceYear[]>;
	title = 'F1 App';
	constructor(
		private service: RaceYearService,
		private route: ActivatedRoute
	) {}

	//Initialize the main page by calling the service to load the Years to be evaluated
	ngOnInit() {
		this.raceYear$ = this.route.paramMap.pipe(
			switchMap((params: ParamMap) => {
				return this.service.getYears();
			})
		)
	}
}
