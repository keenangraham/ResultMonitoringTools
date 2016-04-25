import {Component, Input} from 'angular2/core';
import {Data} from './sample';

@Component({
	selector: 'data-detail',
	template:`
    				<div *ngIf="data">
    				<h2>Edit {{data.Order_ID}} details:</h2>
    				<div><label>Order ID: </label>{{data.Order_ID}}</div>
    				<div>
    				<input [(ngModel)] = "data.Order_ID" placeholder="H5010501"/>
    				</div>
    				<div><label>Date: </label>{{data.Date}}</div>
    				<div>
    				<input [(ngModel)] = "data.Date" placeholder="2014-01-01"/>
    				</div>
    				<div><label>Ward Name: </label>{{data.Ward_Name}}</div>
    				<div>
    				<input [(ngModel)] = "data.Ward_Name" placeholder="Ref. Atl."/>
    				</div>
    				<div><label>Result: </label>{{data.Type}}</div>
    				<div>
    				<input [(ngModel)] = "data.Type" placeholder="Null"/>
    				</div>
    				<div><label>Organism: </label>{{data.Organism}}</div>
    				<div>
    				<input [(ngModel)] = "data.Organism" placeholder="Null"/>
    				</div>
    				</div>

    			`


})

export class DataDetailComponent{
 	@Input()
    data: Data;
	
}