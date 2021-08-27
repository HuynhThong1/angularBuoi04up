import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-demo-pipe',
    template: `
    
        <div class="container">
            Demo pipe
            <br />
            {{hoTen | uppercase}}


            <p>
                {{number | number}}
            </p>

            <p>
                {{money | number: '4.'}}
            </p>

            <p>
                {{percent | percent}}
            </p>

            <p>
                {{sinhVien | json}}
            </p>

            <p>
                {{newDate | date: 'dd-MM-YYYY hh:mm:ss a'}}
            </p>
        </div>
    
    `
})

export class DemoPipeComponent implements OnInit {


    hoTen:string = 'Huynh Minh Thong';

    number:number = 1000000000;

    money:number = 98.37;

    percent:number = 0.55;

    sinhVien:any = {ma:1, ten:'Thong'}

    newDate:Date = new Date();


    constructor() { }

    ngOnInit() { }
}