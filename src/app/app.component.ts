import { Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  showHeader:boolean = false;
  showFooter:boolean = false;
  title = 'angularbasic';
  constructor(private route: Router) { }
  ngOnInit() {
    
    this.route  .events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        if(e.url == '/' || e.url == '/404'){
          this.showHeader = false;
          this.showFooter = false;
        }else{
          this.showHeader = true;
          this.showFooter = true;
        }
      }
    });

  }
}