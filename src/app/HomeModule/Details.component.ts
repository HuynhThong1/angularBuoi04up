import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { QuanLyPhimService } from '../_core/Services/QuanLyPhim.service';

@Component({
    selector: 'app-detail',
    template: `
        <div class="container">
            detail: {{id}}
            detail snapshot: {{idSnapShot}}


            <div>
                <h3>Các sản phẩm liên quan</h3>

                <div>
                    <a class="btn btn-primary" routerLink="/detail/4285">Phim 4285</a>
                    <br>
                    <a class="btn btn-success" routerLink="/detail/4286">Phim 4286</a>
                </div>
            </div>
        </div>
    
    `
})

export class DetailComponent implements OnInit {


    id:string = '';
    idSnapShot:string = '';
    chiTietPhim:any = {};

    constructor(private atvRoute: ActivatedRoute, private qlPhim: QuanLyPhimService, private title:Title) { }

    async ngOnInit() { 


        console.log(this.atvRoute.snapshot.params.id);

        this.idSnapShot = this.atvRoute.snapshot.params.id;

        this.atvRoute.params.subscribe((params) => {
            this.id = params.id;

            // this.layChiTietPhim(this.id);
            this.layChiTietPhimAsync(this.id);
        })


        this.atvRoute.queryParams.subscribe((params) => {
            console.log('params', params);
            this.title.setTitle(params.tenPhim);
        })

    }


    layChiTietPhim(idPhim:string){
        this.qlPhim.layChiTietPhim(idPhim).subscribe((result) => {
            this.chiTietPhim = result.content;
            console.log('Chi Tiết phim', this.chiTietPhim);
        }, error => {
            console.log(error.error);
        });
    }


    async layChiTietPhimAsync(idPhim: string){

        try { 
            let result = await this.qlPhim.layChiTietPhim(idPhim).toPromise();

            console.log('result', result);
        }

        catch(error){
            console.log(error.error);
        }

    }
}