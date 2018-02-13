import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http'
import {getdataService} from './getdataServie'
import 'rxjs/add/operator/toPromise'
import 'rxjs/Observable'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	constructor(private http:Http, private gs:getdataService){}
	url='http://localhost:5555/products'
	listdata$
	ngOnInit(){
		this.listdata$=this.gs.getData(this.url)
		console.log("app component "+this.listdata$)
	}

	
	deleteProd=function (id){
		if(confirm("Sure, U wanna delete?")){
			this.http.delete(`${this.url}/${id}`).
			subscribe(res=>console.log(res))
			}

		}
		title = 'app';
}

