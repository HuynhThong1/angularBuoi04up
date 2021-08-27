import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-danh-sach-san-pham',
    template: `
    
        <div class="container">
            <h3>Bài Tập xem chi tiết</h3>

            <div class="row">
                <div class="col-4" *ngFor="let sp of mangSanPham">
                    <app-san-pham [sanPham]="sp"></app-san-pham>
                </div>
            </div>

            <app-modal></app-modal>
        </div>
    `
})

export class DanhSachSanPhamComponent implements OnInit {


    mangSanPham: SanPham[] = [
        { maSP: '1', tenSP: 'Iphone X', hinhAnh: 'https://picsum.photos/id/1/200/200', gia: 1000 },
        { maSP: '2', tenSP: 'Iphone Xs', hinhAnh: 'https://picsum.photos/id/2/200/200', gia: 2000 },
        { maSP: '3', tenSP: 'Iphone Xs Max', hinhAnh: 'https://picsum.photos/id/3/200/200', gia: 3000 }
    ]
    constructor() { }

    ngOnInit() { }
}


interface SanPham {
    maSP: string, tenSP: string, gia: number, hinhAnh: string
}