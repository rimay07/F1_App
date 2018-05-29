/** 
*  Race Service
*  Main component that loads all the main page
**/

//Libraries to import to run the App

import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Define RaceYear object
export class RaceYear {
  constructor(public year: number) { }
}

//Define values for the selection list so that the data array can easily be manipulated
const raceYears = [];
let range = 10;
let startYear = 2005
let yearVal = startYear + range;

//Service can be used by any component in the app
@Injectable()
export class RaceYearService {
	constructor(private http:HttpClient) {}
	
	//Set the array of years to be evaluated 
	getYears() { 
		for(startYear; startYear <= yearVal; startYear++){
			raceYears.push(new RaceYear(startYear));
		}
		return of(raceYears); 
	}

	//Call the ergast API to load racing results
	getYear(val) {
		return this.http.get('http://ergast.com/api/f1/' + val + '/results/1.json');
	}
	
	//Call the ergast API to load world champion results
	fetchWorldChampion(year){
		return this.http.get('http://ergast.com/api/f1/' + year +'/driverStandings/1.json');
	}
	
	//Define table headers
	getRaceHeaders(){
		return ["year", "race", "number", "winner", "constructor", "time"];
	}
}
