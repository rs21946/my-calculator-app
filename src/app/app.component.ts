import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  expression:any = '0';
  calc(exp:any) {
    if(this.expression === '0') {
      this.expression = exp;
    }
    else {
      this.expression += exp;
    }
  }
  clear() {
    this.expression = '0'
  }
  calculate() {
    this.expression = eval(this.expression)
  }
}
