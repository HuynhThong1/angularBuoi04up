import { Component, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shortcut'
})

export class ShortCutPipe implements PipeTransform {
    transform(value: any, limit:number): any {
        

        return value.length >= limit ? value.substr(0, limit) + '...' : value;
    }
}


// Vị dụ 
// {{value | pipeName: params}}


/* 

        {{value | shortcut: 50}}

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam suscipit nisi asperiores corporis accusantium ad fugiat aliquam quae sapiente in excepturi aspernatur tempore, hic quam enim. Et ipsam dolorem quidem.

*/