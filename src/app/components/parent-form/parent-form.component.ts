import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.css']
})
export class ParentFormComponent implements OnInit {

  constructor() { }

  formArray: FormGroup;

  test: Array<number> = [1, 3];

  basicForm(): FormGroup {
    return new FormGroup({
      name: new FormControl('',[Validators.required]),
      salaried: new FormControl('')
    })
  }

ngOnInit(): void {
  this.formArray = new FormGroup({
    regForms: new FormArray([
      this.basicForm(),
      this.basicForm()
    ])
  });
}

addForm() {
  if (this.formArray.valid) {
    (this.formArray.get('regForms') as FormArray).push(this.basicForm());
  }
}

submitForm() {
  if (!this.formArray.valid) {
    console.log("into value");
    this.formArray.get('regForms').controls.forEach(control => {
      control.get('name').markAsDirty();
    })
  } else {
    console.log(this.formArray.value);
  }
}

formClosed(index) {
  (this.formArray.get('regForms') as FormArray).removeAt(index);
}

}
