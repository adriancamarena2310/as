import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title: string = 'Mi primera app de Angular';
  public counter: number = 10;

  public increseBy( value:number ):void{
    this.counter += value;
  }

  public reset():void{
    this.counter = 10;
}
}
