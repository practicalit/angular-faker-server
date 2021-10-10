import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  constructor() { }
  showDiv: boolean = false;
  showTime: boolean = false;
  ngOnInit(): void {
    
    console.log("parent component called");
  }

}
