import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private route: Router, private routerActive: ActivatedRoute){}
    ngOnInit(): void {
        this.route.navigate(['book-names'], {relativeTo: this.routerActive});
    }

    logBook(): void{
      this.route.navigate(['log-book'], {relativeTo: this.routerActive});
    }

    booknames():void{
      this.route.navigate(['book-names'], {relativeTo: this.routerActive});
    }
}
