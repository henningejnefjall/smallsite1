import { Component, OnInit } from '@angular/core';
import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';
import {MydataService} from '../mydata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({opacity:0}), {optional:true}),
        
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity:0, transform:'translateY(-75%)', offset:0}),
            style({opacity:.5, transform:'translateY(35px)', offset:.3}),
            style({opacity:1, transform:'translateY(0)', offset:1}),
          ]))]), {optional:true}),

          query(':leave', stagger('300ms', [
            animate('.6s ease-in', keyframes([
              style({opacity:1, transform:'translateY(0)', offset:0}),
              style({opacity:.5, transform:'translateY(35px)', offset:.3}),
              style({opacity:0, transform:'translateY(-75%)', offset:1}),
            ]))]), {optional:true})
      ])
    ])
  ]
  // styles: [`
  //   p {font-weight:bold;}
  //   div {color:gray}
  // `]
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText:string = 'Add an item';
  goalText:string = 'My first life goal';
  goals = [];

  constructor(private _mydata: MydataService) { }

  ngOnInit() {
    this._mydata.goal.subscribe(therespons => this.goals = therespons);
    this.itemCount = this.goals.length;
    this._mydata.changeGoal(this.goals);
  }

  addItem(){
    this.goals.push(this.goalText);
    this.goalText = "";
    this.itemCount = this.goals.length;
    this._mydata.changeGoal(this.goals);
  }

  removeItem(i){
    this.goals.splice(i, 1);
    this._mydata.changeGoal(this.goals);
    this.itemCount = this.goals.length;
  }

}
