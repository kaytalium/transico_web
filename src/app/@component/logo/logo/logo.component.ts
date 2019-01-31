import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  @Input() color: string
  wrapperClass: string
  constructor() { }

  ngOnInit() {
    if(this.color){      
        this.wrapperClass = this.color      
    }else{
      this.wrapperClass = "default"
    }
  }

}
