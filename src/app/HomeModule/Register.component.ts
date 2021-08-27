import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-register2',
    template: `
        <div class="container">
            <h3 class="text-center">Register</h3>


            <div class="form-group">
                <p>userName</p>
                <input class="form-control" name="userName" />
            </div>
            <div class="form-group">
                <p>Email</p>
                <input class="form-control" name="email" />
            </div>
            <div class="form-group">
                <p>Password</p>
                <input class="form-control" name="password" />
            </div>
            <div class="form-group">
                <button class="btn btn-success" (click)="submit()">submit</button>
            </div>
        </div>
    `
})

export class RegisterComponent2 implements OnInit {


    isSubmit: boolean = false;

    constructor() { }

    ngOnInit() { }


    submit(){
        this.isSubmit = true;
        alert('true');
    }
}