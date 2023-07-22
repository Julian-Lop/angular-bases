import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-counter',
  template: `
  <h2>Counter: {{counter}}</h2>
  <button (click)="increaseBy(-1)"> - </button>
  <button (click)="increaseBy()"> + </button>
  <br>
  <button (click)="reset()" >Reset</button>`
})
export class CounterComponent extends AppComponent {
  public counter: number = 10

  increaseBy(value:number = 1):void {
    this.counter += value
  }

  reset(): void{
    this.counter = 10
  }
}
