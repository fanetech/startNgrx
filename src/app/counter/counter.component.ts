import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Detail } from '../models/detail';
import { DecrementCounter, IncrementCounter } from '../state/app.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  total = 0
  public allDetails: Detail[] = []
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.pipe(select('appStore')).subscribe(data =>{
      this.total = data.count
      this.allDetails = data.details
    })
  }
  increment(){
    
    this.store.dispatch(new IncrementCounter(1))
  }
  decrement(){
    this.store.dispatch(new DecrementCounter(1))
  }

}
