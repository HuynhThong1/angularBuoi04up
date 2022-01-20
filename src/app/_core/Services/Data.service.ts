import { HttpClient } from '@angular/common/http';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataService {
    constructor(private httpClient: HttpClient) { }


    post(url:string, data:any):Observable<any> {

        return this.httpClient.post(url, data).pipe()
    }
    

    get(url:string):Observable<any> {
        return this.httpClient.get(url);
    }


    put(url:string, data:any):Observable<any>{
        return this.httpClient.put(url, data);
    }

    delete(url:string):Observable<any>{
        return this.httpClient.delete(url);
    }
}