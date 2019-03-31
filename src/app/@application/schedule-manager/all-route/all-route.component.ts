import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-route',
  templateUrl: './all-route.component.html',
  styleUrls: ['./all-route.component.css']
})
export class AllRouteComponent implements OnInit {

  routeNumber: string
  constructor(private route: ActivatedRoute) { 
    this.routeNumber = this.route.snapshot.paramMap.get("id")
  }

  ngOnInit() {
  }

}
