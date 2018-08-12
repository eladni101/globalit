import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs'
import { IResponseServer } from "../../common-class/iresponse-server";
@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private URL= ""
  constructor(private http:Http) { }
 
  Post(data:any,responser:IResponseServer){
    let headers = new Headers()
    headers.set("content-type","application/json")
    headers.set('Accept',"application/json")
    let options = new RequestOptions({headers:headers})
    this.http.post(this.URL,data,options).subscribe((res:Response)=>
    {
      responser.HandleResponse(res.json())
    } 
    )

  }
  SetUrl(url :string){
    this.URL ="/services/"
    this.URL+= url;
  }
  Get(data:any,responser:IResponseServer){
    let gt = this.http.get(this.URL)
    gt.subscribe((res:Response)=>{responser.HandleResponse(res.json())})
  }
}
