import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
     timer=0;

     start=()=>{
      const x=setInterval(()=>{
         this.timer++;
         if(this.timer==50){
          clearInterval(x)
        }
      },100)

      
     }
     reverse=()=>{
      const x=setInterval(()=>{
         this.timer--;
         if(this.timer==-50){
          clearInterval(x)
        }
      },100)

      
     }
}
