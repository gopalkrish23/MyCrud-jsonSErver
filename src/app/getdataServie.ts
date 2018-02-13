import{Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Observable} from 'rxjs/Observable'

@Injectable()
export class getdataService{
	constructor(private http:Http){}
	jsonRes:any
	a:any=[{
    "name": "fs",
    "price": "231",
    "id": 27
  },  {
    "name": "fsdsa",
    "price": "231",
    "id": 30
  },  {
    "name": "gd",
    "price": "gd",
    "id": 31
  }]
	getData(url:any):Observable<any>{
		return this.http.get(`${url}`).map(res=>res.json())
		}
}