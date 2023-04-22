import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent {
  minuts:number=0;
  seconds:number=0;
  milisec:number=0;
  isRunning:boolean=false;
  timer:any;

  startTimer(){
    this.isRunning=true;
    this.timer=setInterval(()=>{
        this.milisec++;
        if(this.milisec===60){
          this.milisec=0;
          this.seconds++;
          if(this.seconds===60){
            this.seconds=0;
            this.minuts++;
          }
        }
    },100)
  }
  stopTimer(){
    this.isRunning=false;
    clearInterval(this.timer);
  }
  resetTimer(){
    this.isRunning=false;
    clearInterval(this.timer);
    this.milisec=0
    this.seconds=0;
    this.minuts=0;
  }
}
