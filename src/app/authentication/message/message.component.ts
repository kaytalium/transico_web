import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message: string;
  data: Array<string> = []
  constructor() { }

  ngOnInit() {

    this.data.push("Design is a way of life, a point of view. It involves the whole complex of visual communications: "+
    "talent, creative ability, manual skill, and technical knowledge.nAesthetics and economics, "+
    "technology and sychology are intrinsically related to the process.")
    this.data.push("The public is more familiar with bad design than good design. It is, in effect, "+
    "conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, "+
    "the old reassuring. Paul Rand")
    this.data.push("Learning and innovation go hand in hand. The arrogance of success is to think that what"+
    " you did yesterday will be sufficient for tomorrow. William Pollard")

    this.message = this.data[0]
    this.randomMessage().subscribe((msg: string)=>{
      this.message = msg;
    })
  }

  randomMessage(){
    return new Observable(observer =>{
      setInterval(()=>{
        let number = Math.floor(Math.random() * this.data.length) + 0
        observer.next(this.data[number])
      },10000)
    });
  }

}
