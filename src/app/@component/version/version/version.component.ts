import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { environment } from '@env/environment' 


@Component({
  selector: 'version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent implements OnInit {

  @Input() color: string;
  version: string
  constructor() { }

  ngOnInit() {
    this.version = environment.VERSION

    
  }

}
