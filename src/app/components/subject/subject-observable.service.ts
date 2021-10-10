import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectObservableService {

  subject$ = new BehaviorSubject<String>("");
  constructor() { }
}
