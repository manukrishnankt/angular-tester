import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.enableCheckFunction();
  }

  enableCheckFunction() {
    console.log('enableCheckFunction Method Invoked on ' + Date.now());
  }
  buttonClick(objEvent: Event){
    console.log(objEvent.type);
  }
}
