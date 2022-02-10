import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()

export class PeticionesService{

    public url: string;
    public userID: number;
    constructor(
        public _htpp: HttpClient

    ){
        this.url = "https://reqres.in/";
        this.userID = 1;
    }

    getUser(userID:number): Observable<any>{
        return this._htpp.get(this.url+ 'api/users/'+userID);
    }
    addUser(user:any): Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._htpp.post(this.url+'api/users',params,{headers: headers});
    }
}