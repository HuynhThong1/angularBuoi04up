import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-form-validation',
    template: `
    <form #frmDangKy="ngForm" class="container" (ngSubmit)="dangKy(frmDangKy.value)">
        <h3>Đăng Ký</h3>
        <div class="form-group">
            <p>Tài Khoản</p>
            <input #taiKhoan="ngModel" class="form-control" name="taiKhoan" ngModel required minlength="6" maxlength="32"/>
            <div *ngIf="(taiKhoan.touched || taiKhoan.dirty) && taiKhoan.errors" class="alert alert-danger">
                <p *ngIf="taiKhoan.errors.required" class="text-danger">Tài Khoản không được bỏ trống!</p>
                <p *ngIf="taiKhoan.errors.minlength || taiKhoan.errors.maxlength" class="text-danger">Tài Khoản nhập từ 6 đến 32 ký tự!</p>
            </div>
        </div>
        <div class="form-group">
            <p>Họ Tên</p>
            <input #hoTen="ngModel" class="form-control" name="hoTen" ngModel required pattern="^[A-Z a-z]+$"/>
            <div *ngIf="(hoTen.touched || hoTen.dirty) && hoTen.errors" class="alert alert-danger">
                <p *ngIf="hoTen.errors.required" class="text-danger">Họ tên không được bỏ trống!</p>
                <p *ngIf="hoTen.errors.pattern" class="text-danger">Họ tên không được chứa ký tự đặc biệt!</p>
            </div>
        </div>
        <div class="form-group">
            <p>Mật Khẩu</p>
            <input #matKhau="ngModel" class="form-control" name="matKhau" ngModel required minlength="6" maxlength="32"/>
        </div>
        <div class="form-group">
            <p>Email</p>
            <input #email="ngModel" class="form-control" name="email" ngModel required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
            <div *ngIf="(email.touched || email.dirty) && email.errors" class="alert alert-danger">
                <p *ngIf="email.errors.required" class="text-danger">Email không được bỏ trống!</p>
                <p *ngIf="email.errors.pattern" class="text-danger">Email không hợp lệ!</p>
            </div>
        </div>
        <div class="form-group">
            <p>số điện thoại</p>
            <input class="form-control" name="soDT" ngModel/>
        </div>
        <div class="form-group">
            <p>Mã Nhóm</p>
            <select class="form-control" name="maNhom">
                <option value="GP01">GP01</option>
                <option value="GP02">GP02</option>
                <option value="GP03">GP03</option>
            </select>
        </div>

        <div class="form-group">
            <button class="btn btn-success" [disabled]="frmDangKy.invalid || frmDangKy.submitted" type="submit">Đăng ký</button>
        </div>
    </form>
    
    <div class="container">
        <div class="card">
            <div class="card-header bg-dark text-white">
                Danh Sách người dùng
            </div>
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Tài Khoản</th>
                            <th>Họ Tên</th>
                            <th>Mật Khẩu</th>
                            <th>Email</th>
                            <th>Số Điện Thoại</th>
                            <th>Mã Nhóm</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ng-container *ngIf="isEdit">
                            <tr *ngFor="let nguoiDung of dsNguoiDung">
                                <td>{{nguoiDung.taiKhoan}}</td>
                                <td>{{nguoiDung.hoTen}}</td>
                                <td>{{nguoiDung.matKhau}}</td>
                                <td>{{nguoiDung.email}}</td>
                                <td>{{nguoiDung.soDT}}</td>
                                <td>{{nguoiDung.maNhom}}</td>
                                <td>
                                    <button class="btn btn-primary" (click)="chinhSua(nguoiDung)">Chỉnh sửa</button>
                                    <button class="btn btn-danger ml-2">Xóa</button>
                                </td>
                            </tr>
                        </ng-container>
                        <ng-container *ngIf="!isEdit">
                            <tr *ngFor="let nguoiDung of dsNguoiDung">
                                <td><input class="form-control" [(ngModel)]="nguoiDung.taiKhoan"/></td>
                                <td><input class="form-control" [(ngModel)]="nguoiDung.hoTen"/></td>
                                <td><input class="form-control" [(ngModel)]="nguoiDung.matKhau"/></td>
                                <td><input class="form-control" [(ngModel)]="nguoiDung.email"/></td>
                                <td><input class="form-control" [(ngModel)]="nguoiDung.soDT"/></td>
                                <td><input class="form-control" [(ngModel)]="nguoiDung.maNhom"/></td>
                                <td>
                                    <button class="btn btn-success" (click)="changeEdit(true)">Chỉnh sửa</button>
                                    <button class="btn btn-danger ml-2">Xóa</button>
                                </td>
                            </tr>
                        </ng-container>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    
    `,

    styles: [`
        input.ng-invalid {
            border-left: 5px solid red;
        }
        input.ng-valid {
            border-left: 5px solid green;
        }
    
    `]
})

export class FormValidationComponent implements OnInit {

    isEdit:Boolean = true;

    @ViewChild('frmDangKy') frmDangKy!:NgForm;

    dsNguoiDung: any [] = [
        {taiKhoan: 'hthong19', hoTen: 'Huynh Minh Thong', matKhau: '123123123', email: 'huynhminhthong1912@gmail.com', soDT: '0900909090', maNhom: 'GP01'},
        {taiKhoan: 'hthong20', hoTen: 'Huynh Minh Thongg', matKhau: '123123123', email: 'huynhminhthong1912@gmail.com', soDT: '0900909090', maNhom: 'GP02'},
    ]

    emailRegex: string = `/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`

    constructor() { }

    ngOnInit() { }


    dangKy(value: NgForm) {
        console.log('value', value);
    }

    chinhSua(nguoiDungEdit:any){
        this.isEdit = false;
        this.frmDangKy.setValue(nguoiDungEdit);
    }

    changeEdit(edit:boolean){
        this.isEdit = edit;
    }
}