import { Component, OnInit, Input } from '@angular/core';
import { setStyles } from '@angular/animations/browser/src/util';
import { element } from '@angular/core/src/render3';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  @Input() src: string
  @Input() initials: string
  @Input() size: string;

  elem: HTMLElement
  constructor() { }

  ngOnInit() {
    let fontSize; 

    this.elem = document.getElementById('wrapper');

    if(this.size != null){
      this.elem.style.setProperty('width', "40px");
      this.elem.style.setProperty('height', "40px");
    }

    if(this.size){
      this.elem.style.setProperty('width', this.size+"px");
      this.elem.style.setProperty('height', this.size+"px");

      //set the font size
      fontSize = (12 * parseInt(this.size)) / 40
      this.elem.style.setProperty('font-size', fontSize+"px");

    }

  }

}
