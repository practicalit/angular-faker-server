import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  constructor() { }

  @Input()
  formsGroup: FormGroup;

  @Input()
  index: number;

  @Output()
  formClosed: EventEmitter<number> = new EventEmitter<number>();

  closeForms() {
    this.formClosed.emit(this.index);
  }

}
