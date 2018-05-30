/** 
*  Race Year Component
*  Component to load when the years are selected from the app
**/

//Libraries to import to run the App

import { switchMap } from 'rxjs/operators';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
//Import service to process data
import { RaceYearService }  from './race-year.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './race-year.component.html',
  styleUrls: ['./race-year.component.css']
})
//Load Race table results
export class RaceYearComponent{
	//Define values to be used in the HTML Page
	raceResultHeader: string[];
	raceResult: any;
	isResultsLoaded: boolean;
	p:number;
	raceYear:any;
	champion:any;
	mobile:boolean;
	
	constructor(
		private route: ActivatedRoute,
		private service: RaceYearService,
		private toastr: ToastrService
	) {}
	
	//Initialize Page	
	ngOnInit() {
		this.isResultsLoaded = false;
		//Get parameters from URL and process the request
		this.route.params.subscribe( params => 
			//Request service to fetch data
			this.service.getYear(params.id).subscribe(
				data => { this.parseData(data) },
				err => this.toastr.error('Server Error', 'Oops!'),
				() => {
					this.checkMobile();
					this.isResultsLoaded = true;
					this.p = 1;
					this.raceYear = params.id;
					this.fetchWorldChampion(this.raceYear);
				}
			)
		)
	}
	//Assign results to HTML data
	parseData(data) {
		this.raceResultHeader = this.service.getRaceHeaders();
		this.raceResult = data.MRData.RaceTable.Races;
	}
	
	//Request World Champion Info 
	fetchWorldChampion(year){
		this.service.fetchWorldChampion(year).subscribe(
			data => {this.getChampion(data)},
			err => this.toastr.error('Server Error', 'Oops!'),
			() => {
				if (!this.mobile)this.toastr.success('Finish Loading Results & World Champion', 'Success!');
			}
		)
	};
	
	//Assign the champion to a data bound variable to be used by the HTML
	getChampion(data) {
		this.champion = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.driverId;
	}
	
	checkMobile(){
		this.mobile = (window.screen.width < 800) ? true : false;
	}
}
