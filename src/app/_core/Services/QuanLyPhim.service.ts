import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';
import { DataService } from './Data.service';

@Injectable({providedIn: 'root'})

export class QuanLyPhimService {

    //DJ:  Dependency injection
    constructor(private httpClient: HttpClient, private dataService: DataService) { //httpClient giống hệ axios dùng trong angular để call api}

    }
    
    layDanhSachPhim () : Observable<any>{
        // let result = this.dataService.get(`http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`);

        let result = this.dataService.get(`http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`);


        

        return result;
    }


    layChiTietPhim (idPhim:string): Observable<any> {
        let result = this.httpClient.get(`http://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idPhim}`)

        return result;
    } 
}