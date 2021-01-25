import { Component, OnInit, DebugEventListener } from '@angular/core';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.css']
})
export class DashbaordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  value = '';
  update(value: string) {
     this.value = value;
     console.log(this.value);
     }

}
