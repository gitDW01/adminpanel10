import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  constructor(private route: Router){}
  ngOnInit(){
    this.route.events.subscribe(url => console.log(url));
  }
}
