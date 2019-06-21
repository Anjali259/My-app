import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input('abc') public name;
  @Output() public childEvent = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  fireEvent()
  {
    this.childEvent.emit('Hey Event from child compoent to parent  component');
  }

}
