import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fetch-operator',
  templateUrl: './fetch-operator.component.html',
  styleUrls: ['./fetch-operator.component.css']
})
export class FetchOperatorComponent implements OnInit {

  @Input() searchCity: string;
  @Output() operator: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  send(){
    console.log('send method started');
    if(this.searchCity=== 'chennai') {
      this.operator.emit('Ramesh 9892302344');
    } else{
      this.operator.emit('Suresh 9827481712');
    }
    console.log('send method end');
  }

}
