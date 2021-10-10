import { Component, OnInit } from '@angular/core';
import { SubjectObservableService } from '../subject-observable.service';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {

  data: String = "";
  constructor(private subjectObservable: SubjectObservableService) { }

  ngOnInit(): void {
    this.subjectObservable.subject$.subscribe(x => {
      this.data = x
    });
  }

}
