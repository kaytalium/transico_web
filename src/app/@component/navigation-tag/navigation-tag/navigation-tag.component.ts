import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd, RouterEvent, ChildActivationEnd } from '@angular/router';
import { NavigationPath } from '../navigationPath';

@Component({
  selector: 'navigation-tag',
  templateUrl: './navigation-tag.component.html',
  styleUrls: ['./navigation-tag.component.css']
})
export class NavigationTagComponent implements OnInit {

  
  url: string;
  constructor(private router: Router) { }

  ngOnInit() {

    let navigationPath: NavigationPath = new NavigationPath(window.location.pathname);
    this.url = navigationPath.getDisplayName(2)

    this.router.events.subscribe((event: RouterEvent) => {
  
      if (event instanceof NavigationEnd) {

        this.url = navigationPath.set(event.url).getDisplayName(2)
      }

    })
  }

}

