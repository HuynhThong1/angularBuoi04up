import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import * as $ from 'jquery';

@Component({
    selector: 'app-child',
    template: `
        <div class="card w-25">
            <img class="" [src]="product.image" />
            <div class="card-body">
                <p>{{product.name}}</p>
                <p>{{product.price}}</p>
            </div>
        </div>
    
    
    `
})

export class ChildComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {


    @Input() product:any;
    constructor() { 

        console.log('contructor child');    
    }

    ngAfterViewInit():void {
        $('.card-body').addClass('bg-dark text-white');
    }


    ngOnChanges(changes: SimpleChanges):void {
        //Mỗi khi input thay đổi sẽ được kích hoạt (hơi giống didUpdate bên react)
        console.log('onChange child', changes);
        // throw new Error('Method not implemented');
    }

    ngOnInit() {
        //Chạy 1 lần đầu tiên sau khi các component directive ... được render (giống component didmount);
        console.log('onInit child');
     }

    ngOnDestroy():void {
        //Chạy trước khi giao diện component mất đi (giống willUnmount để hủy các biến observable hoặc các hàm chạy ngầm)
        throw new Error('Method not implemented');
    }

    
}