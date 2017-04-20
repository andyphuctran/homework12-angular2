import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {
  private items:string[];
  private switch:boolean;
  constructor() { 
    this.items=['Modern Web Programming', 'Web Application Programming','Big Data', 'Machine Learning'];
    this.switch=true;
  }
  onSwitch(){
    this.switch=!this.switch;
  }

  ngOnInit() {
  }

}
