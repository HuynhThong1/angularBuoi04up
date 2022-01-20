import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-demo-lifecycle',
    template: `
    
        <div class="container">
            <app-child [product]="product"></app-child>

            <input #inputName class="form-control mt-5" />
            <button (click)="changeName(inputName.value)">Change Name</button>
        </div>


        
    `
})

export class DemoLifeCycleComponent implements OnInit {

    product: any = { id: 1, name: 'Iphone', price: 1000, image: 'https://picsum.photos/id/237/200/200' }

    constructor() { }

    changeName(name: string) {
        this.product = {...this.product, name};
    }

    ngOnInit() { }
}