import { Component, OnInit } from '@angular/core';
import { QuanLyNguoiDungService } from 'src/app/_core/Services/QuanLyNguoiDung.service';

@Component({
    selector: 'app-demo-behaviorsubject',
    template: `
    
        <div class="container">
            <h3>Demo behavior subject</h3>
            <div class="row">
                <div class="col-4" *ngFor="let user of arrUser">
                    <div class="card">
                        <img [src]="user.avatar" alt="..." />
                        <div class="card-body">
                            Name: {{user.name}}
                            Age: {{user.age}}
                        </div>

                        <div class="card-footer">
                            <button class="btn btn-outline-success" data-toggle="modal" data-target="#modelId" (click)="viewProfile(user)">View Profile</button>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    `
})

export class DemoBehaviorSubjectComponent implements OnInit {


    arrUser:User[] = [
        {id: '1', name:'Thong', avatar:'https://i.pravatar.cc/200?u=1', age: 20},
        {id: '2', name:'Thong2', avatar:'https://i.pravatar.cc/200?u=2', age: 21},
        {id: '3', name:'Thong3', avatar:'https://i.pravatar.cc/200?u=3', age: 22},
    ];

    constructor(private qlndService:QuanLyNguoiDungService) { }

    ngOnInit() { }


    viewProfile(userProfile:User){
        this.qlndService.changeModal(userProfile);
    }
}


interface User{
    id:string,
    name:string, 
    avatar:string, 
    age:number,
}