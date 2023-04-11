import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentRoute: string = "";

  constructor(private route: Router, private routerActive: ActivatedRoute) {
  }
  ngOnInit(): void {

    this.route.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        console.log("in here");
        localStorage.setItem("currentRoute",this.currentRoute);
        console.log('Current Route:', this.currentRoute);
      }
    });

    if (this.currentRoute === "/home/log-book") {
      console.log("in here logbook init");
      this.route.navigate(['log-book'], { relativeTo: this.routerActive });
    }

    if(this.currentRoute === "/home/book-names") {
      this.route.navigate(['book-names'], { relativeTo: this.routerActive });
    }
  }

  logBook(): void {
    this.route.navigate(['log-book'], { relativeTo: this.routerActive });
  }

  booknames(): void {
    this.route.navigate(['book-names'], { relativeTo: this.routerActive });
  }
}
