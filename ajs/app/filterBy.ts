import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'filterBy')
export class FilterBy implements PipeTransform {
	transform(value:any, args:any) {
			if(value = 0){
				return value;
			}else{
			return value.filter(data => {
				return this.data == this.args;}
			})};
	}

}
