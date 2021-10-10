import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubjectObservableService } from '../subject-observable.service';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {

  isSubmitted: boolean = false;
  form: FormGroup;
  constructor(private subjectService: SubjectObservableService) {
    this.form = new FormGroup({
      content: new FormControl('', [Validators.required])
    });
   }

  
  ngOnInit(): void {
    this.subjectService.subject$.next("updated value");
  }

  submitter() {
    this.isSubmitted = true;
    if (this.form.valid) {
      console.log("yess");
      /*
       * this is how you will be passing the value to the child with the 
       value of the input box. 
       */
      this.subjectService.subject$.next(this.form.get('content').value);
      //if you want to force the error 
      //this.form.get('content').setErrors({'required': true})
    } else {
      console.log("noo");
    }
  }

  clickHandler() {
    this.subjectService.subject$.next("you clicked here");
  }

}
