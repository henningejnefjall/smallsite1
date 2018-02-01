import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {MydataService} from '../mydata.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  testid;
  goals : any;

  //dependency injection
  constructor(private myroute:ActivatedRoute, private myrouter:Router, private _mydata: MydataService) { 
    this.myroute.params.subscribe(therespons => console.log(therespons.id));
    this.myroute.params.subscribe(therespons => this.testid = therespons.id);
  }

  ngOnInit() {
    this._mydata.goal.subscribe(therespons => this.goals = therespons);
  }

  sendMeHome(){
    this.myrouter.navigate(['']);
  }

}
