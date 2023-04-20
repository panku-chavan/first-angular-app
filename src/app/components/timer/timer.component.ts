import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
     timer:number=0;
     x:any
     start=()=>{
       this.x=setInterval(()=>{
         this.timer++;
         if(this.timer==50){
          clearInterval(this.x)
        }
      },100)

      
     }
     reverse=()=>{
       this.x=setInterval(()=>{
         this.timer--;
         if(this.timer==-50){
          clearInterval(this.x)
        }
      },100)

      
     }
     stop=()=>{
      clearInterval(this.x)
     }
}

