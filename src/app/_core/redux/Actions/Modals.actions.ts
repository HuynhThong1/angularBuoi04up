import { Action } from "@ngrx/store";




export class ModalAction implements Action {
    type!: string ;
    sanPham!:SanPham;

    constructor(){

    }
}



interface SanPham {
    maSP: string, tenSP: string, gia: number, hinhAnh: string
}