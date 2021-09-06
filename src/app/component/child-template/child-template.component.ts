import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child-template',
  templateUrl: './child-template.component.html',
  styleUrls: ['./child-template.component.css']
})
export class ChildTemplateComponent implements OnInit {
  @Input()
  content: TemplateRef<any>;
  
  expanded:boolean = false;
  constructor() { }

  /**
   * Take a look on templates.component.html
   * it is embeded in there
   * and it is getting the ng-content from what has been enclosed.
   * 
   * The clock component is projected on this component from the parent
   * The issue is when the clock is not show/hide from the child 
   * component, the ngOnInit hook on the clock is not being called 
   * and hence it is not showing the right time on toggle.
   */
  ngOnInit(): void {
    console.log("child component called");
  }

}
