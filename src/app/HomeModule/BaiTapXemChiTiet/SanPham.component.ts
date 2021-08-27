import { Component, Input, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';


@Component({
    selector: 'app-san-pham',
    template: `
        <div class="card text-left">
          <img class="card-img-top" [src]="sanPham.hinhAnh" alt="">
          <div class="card-body">
            <h4 class="card-title">{{sanPham.tenSP}}</h4>
            <p class="card-text">{{sanPham.gia}}</p>


            <button class="btn btn-outline-success" data-toggle="modal" data-target="#modelId" (click)="xemChiTiet()">Xem Chi Tiết</button>
          </div>
        </div>
    `
})

export class SanPhamComponent implements OnInit {


    @Input() sanPham!: SanPham

    constructor(private store:Store) { }

    ngOnInit() { }

    xemChiTiet(){
        this.store.dispatch({type: 'XEM_CHI_TIET', sanPham:this.sanPham})
    }
}


interface SanPham {
    maSP:string, tenSP:string, gia:number, hinhAnh:string
}