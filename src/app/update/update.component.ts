import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {Http, Response, Headers} from '@angular/http'
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {  
  constructor(private ac:ActivatedRoute, private http:Http, private rt:Router) { }
  prodid:number
  prodlist:any=[]
  updateobj:Object={}
  url="http://localhost:5555/products"
  hd=new Headers({'Content-type':'application/json'})
  
  updateData(products){
  	  this.updateobj={
  		"name":products.updatename,
  		"price":products.updateprice
  	}
    console.log(this.updateobj)
  	this.http.put(`${this.url}/${this.prodid}`,JSON.stringify(this.updateobj),{headers:this.hd})
    .subscribe(res=>console.log(res, this.hd))
              
  }
  ngOnInit() {
  	this.ac.params.subscribe(data=>{this.prodid=+data['id'],console.log(this.prodid)})

  	this.http.get(`${this.url}`).subscribe(
  		(jsonlist:Response)=>{
  			this.prodlist=jsonlist.json();
  			for(let i=0;i<this.prodlist.length;i++){
  				if(parseInt(this.prodlist[i].id)===this.prodid){
					this.updateobj=this.prodlist[i];
					break;

				}
			}
		})
  	}

}
