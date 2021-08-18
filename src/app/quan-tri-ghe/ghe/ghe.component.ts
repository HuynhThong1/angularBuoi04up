import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {

  status:boolean = false;

  @Input() itemGhe:any;
  @Output() emitStatus = new EventEmitter();


  constructor() { }

  datGhe(){
    if(this.itemGhe.status){
      this.itemGhe.status = false;
    }
    else{
      this.itemGhe.status = true;
    }
    this.emitStatus.emit(this.itemGhe.status);
  }

  ngOnInit(): void {
  }

}
