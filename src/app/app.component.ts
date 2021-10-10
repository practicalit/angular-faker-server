import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

/**
 * @author Practical IT
 * 
 * Used for coursework for showing routing, Accessiblity, events and more
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentRoute = 'home'; //internal variable for the currently selected path.

  constructor(private router: Router, private location: Location) {
    //get the current rounte when navigated. 
    //remember pages won't reload upon routing unless required.
    //this method provides the current path router has navigated to.
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.currentRoute = location.path();
      } else {
        this.currentRoute = 'home'; //duplicate as it is intialized already.
      }
    });
  }
  title = 'simple';

  /*
   * This is a bit of hack. We want to mark where the navigation is starting 
   * up on reload. When the page loads for first time, we want that first element
   * to be hidden. But on the subsequent link clicks, we want this tobe the first 
   * element so that the very next element on tab will be the Skip Navigation link
   * 
   * The reason for that is, upon the .focus(), setting the focus programmatically,
   * when the user hits tab, it will go to the next available tab. Hence we want something
   * to focus first and on tab, Skip Navigation will appear.
   */
  showFirstElement = false;

  //access the skip navigation and first element references.
  @ViewChild('skipNavigation')
  skipNavigation: ElementRef

  @ViewChild('firstElement')
  firstElement: ElementRef

  /**
   * Handler when the skip navigation link is loosing focus
   */
  handleBlur() {
    //just apply class.
    this.skipNavigation.nativeElement.style.position = "absolute";
    this.skipNavigation.nativeElement.style.left = "-1000px";
  }

  /**
   * To be called from each link in the page to reset the tab index order by 
   * focusing on the frist element.
   */
  resetTabindex() {
    this.showFirstElement = true; //set the element to show.
    setTimeout(()=>{ 
      // This is a kind of required to, otherwise the dom can't find the 
      //element immediately and it will throw undefined error. This 
      //setTimeout part will give it a bit of break 
      this.firstElement.nativeElement.focus();//working
    },0); 
  }

  /**
   * Handle the keyup event for the skip navigation link
   * when event is triggered, it will apply the styles only if it is tab.
   * @param event 
   */
  handleKeyup(event) {
    if (event.keyCode == 9) {
      this.skipNavigation.nativeElement.style.position = "static";
      this.skipNavigation.nativeElement.style.left = "100px";
    }
  }
}
