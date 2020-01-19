import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navegation-bar',
  templateUrl: './navegation-bar.component.html',
  styleUrls: ['./navegation-bar.component.css']
})
export class NavegationBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // async ga(){
  //   await this.router.navigate(['/cricaver']);
  // }
}
