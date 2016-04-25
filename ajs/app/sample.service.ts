import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {Injectable} from 'angular2/core';


@Injectable()
export class SampleService {
		

		constructor(private http: Http) { }

		getSamples() {
			return this.http.get('/app/data.json')
   				.map((res:Response) => res.json());
		}

}