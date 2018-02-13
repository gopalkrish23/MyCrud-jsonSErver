import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http'
import {AppComponent} from '../app.component'
import {Router} from '@angular/router'
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(private ht:Http,private acObj:AppComponent,private rt:Router) { }
  url='http://localhost:5555/products/'
  prodObj:Object={}
  inserted:boolean=false
  success:string="The product added"
  haha=function(){
  	console.log("inserted")
  }
  addData=function(products){
  	this.prodObj=products;
  	this.ht.post(`${this.url}`,this.prodObj).subscribe(
  		(data:Response)=>this.inserted=true, this.rt.navigate([''])
  	)}

}
