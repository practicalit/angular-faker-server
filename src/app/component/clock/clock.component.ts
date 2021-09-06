import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {

  constructor() { }
  time: Date;
  ngOnInit(): void {
    console.log("clock called");
    this.time = new Date();
  }

  ngOnDestroy() {
    console.log('bye bye clock component');
  }
}
