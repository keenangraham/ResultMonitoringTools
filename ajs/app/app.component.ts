import {Component, Pipe, JsonPipe} from 'angular2/core';
import {Data} from './sample';
import {DataDetailComponent} from './data-detail.component';
import {SampleService} from './sample.service';
import {OrderBy} from "./orderBy";
import * as d3 from '../node_modules/d3/d3.js';




@Component({
    selector: 'app',
    styles:[`
	  .selected {
	    background-color: #CFD8DC !important;
	    color: white;
	  }
	  .samples {
	    margin: 0 0 2em 0;
	    list-style-type: none;
	    padding: 0;
	    width: 35em;
	  }
	  .samples li {
	    cursor: pointer;
	    position: relative;
	    left: 0;
	    background-color: #EEE;
	    margin: .5em;
	    padding: .3em 0;
	    height: 1.6em;
	    border-radius: 4px;
	  }
	  .samples li.selected:hover {
	    background-color: #BBD8DC !important;
	    color: white;
	  }
	  .samples li:hover {
	    color: #607D8B;
	    background-color: #DDD;
	    left: .1em;
	  }
	  .samples .text {
	    position: relative;
	    top: -3px;
	  }
	  .samples .badge {
	    display: inline-block;
	    font-size: small;
	    color: white;
	    padding: 0.8em 0.7em 0 0.7em;
	    background-color: #607D8B;
	    line-height: 1em;
	    position: relative;
	    left: -1px;
	    top: -4px;
	    height: 1.8em;
	    margin-right: .8em;
	    border-radius: 4px 0 0 4px;
	  }
	  .float-right {
	  	margin-left: 45em;
	  	position:fixed;

	  }
	`],

    template: `
    			<h1>Parasitology Results Viewer</h1>
    			<h2>{{title}}</h2>
    			<p>Today's date: {{date}}</p>
    		

    			<div class="float-right">
    			<data-detail [data]="selectedDatum"></data-detail>
    			</div>

    			<input type="text" [(ngModel)]="idFilter" placeholder="Search for Order ID"/>
    			<ul class="samples">
    				<li *ngFor="#datum of data" [class.selected]="datum===selectedDatum" (click)="onRowSelect(datum)">
    				<span class="badge">{{datum.Order_ID}}</span>{{datum.Date}}, {{datum.Ward_Name}}, {{datum.Type}} {{datum.Organism}}
    				</li>
    			</ul>

    		  `,

    directives:[DataDetailComponent],
    providers: [SampleService]
    

})

export class AppComponent { 

	title = "Parasitology Monitoring Tool"; 
	date = utc;

	public data;

	public data_error: Boolean = false; 

	selectedDatum: Data;

	constructor(private _sampleService: SampleService) { }

	getData() {
		this._sampleService.getSamples().subscribe(
   			data => {this.data = data},
   			err => {this.data_error = true});

	}

	ngOnInit() {
		this.getData();
	}

	onRowSelect(datum: Data) { this.selectedDatum = datum;}




}


var utc = new Date().toJSON().slice(0,10);
var parseDate = d3.time.format("%Y-%m-%d").parse;
var formatTime = d3.time.format("%B %e, %Y");




