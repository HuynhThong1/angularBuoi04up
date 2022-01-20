import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const stateDefault = {id: '1', name:'Thong', avatar:'https://i.pravatar.cc/200?u=1', age: 20};

@Injectable({providedIn: 'root'})
export class QuanLyNguoiDungService {

    //Khởi tạo state tại service

    userBehavior = new BehaviorSubject(stateDefault);

    userModal =this.userBehavior.asObservable();
    
    constructor(private httpClient: HttpClient) { 

    }

    changeModal(newState:User){
        //Phương thức next nhận vào new state thay đổi state hiện tại
        this.userBehavior.next(newState)
    }


    dangKy (nguoiDung:any): Observable<any> {

        return this.httpClient.post('http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/DangKy', nguoiDung)
    }
    
}

interface User{
    id:string,
    name:string, 
    avatar:string, 
    age:number,
}