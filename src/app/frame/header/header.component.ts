import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  opened: boolean = false
  constructor() { }

  ngOnInit() {
  }

  isOpen(e: any){
      // console.log('this is value from directive: '+e)
      this.opened = e;
  }

}
