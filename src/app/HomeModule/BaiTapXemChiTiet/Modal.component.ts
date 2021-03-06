import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
    selector: 'app-modal',
    template: `
        <!-- Modal -->
        <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                        <div class="modal-header">
                                <h5 class="modal-title">{{modalDetail.tenSP}}</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                            </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <img [src]="modalDetail.hinhAnh" alt="..." />

                            <p>Mã: {{modalDetail.maSP}}</p>
                            <p>Tên Sản Phẩm: {{modalDetail.tenSP}}</p>
                            <p>Giá: {{modalDetail.gia}}</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
        
        <script>
            $('#exampleModal').on('show.bs.modal', event => {
                var button = $(event.relatedTarget);
                var modal = $(this);
                // Use above variables to manipulate the DOM
                
            });
        </script>
    `
})

export class ModalComponent implements OnInit {

    modalDetail!:SanPham;

    constructor(private store:Store<{modalReducer:SanPham}>) { }

    ngOnInit() { 

        this.store.select('modalReducer').subscribe(result => {
            console.log('result', result);
            this.modalDetail = result;
        })
    }
}

interface SanPham {
    maSP: string, tenSP: string, gia: number, hinhAnh: string
}