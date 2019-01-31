import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent implements OnInit {

  @Input() src: string
  @Input() initials: string
  @Input() size: string;

  @ViewChild('wrapper') elem;
  wrapper: HTMLElement;
  constructor() { }

  ngOnInit() {
    this.init()
  }

  ngOnChanges() {
    this.init()
  }

  init() {
    let fontSize: number

    if (this.size) {
      this.elem.nativeElement.style.setProperty('width', this.size + "px");
      this.elem.nativeElement.style.setProperty('height', this.size + "px");
    }

    if (typeof this.src != 'undefined') {
      this.elem.nativeElement.style.setProperty('background-image', 'url(' + this.src + ')')
      this.elem.nativeElement.style.setProperty('background-size', 'cover')
      this.initials = null
      // this.elem.style.setProperty('background', '#000')

    }

    if (typeof this.size === 'undefined' && typeof this.src === 'undefined') {
      //set the font size
      fontSize = (12 * parseInt(this.size)) / 40
      this.elem.nativeElement.style.setProperty('font-size', fontSize + "px");
    }


  }

}
