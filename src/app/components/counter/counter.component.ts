import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter=0;

  increament(){
    if(this.counter===10){
      return;
    }
    this.counter++;
  }
  decreament(){
    if(this.counter===0){
      return;
    }
    this.counter--;
  }
  reset(){
    this.counter=0;
  }
}
