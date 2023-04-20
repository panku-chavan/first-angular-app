import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TimerComponent } from './components/timer/timer.component';
import { CounterComponent } from './components/counter/counter.component';
import { HomeComponent } from './components/home/home.component';
import { StopwatchComponent } from './components/stopwatch/stopwatch.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'counter',component:CounterComponent},
  {path:'timer', component:TimerComponent},
  {path:'stopwatch', component:StopwatchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
