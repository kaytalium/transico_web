import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'company-name',
  templateUrl: './company-name.component.html',
  styleUrls: ['./company-name.component.css']
})
export class CompanyNameComponent implements OnInit {

  @Input() color: string = null;
  wrapperClass: string
  constructor() { }

  ngOnInit() {

    if(this.color){
      this.wrapperClass = this.color
    }else{
      this.wrapperClass = 'default'
    }
  }

}
