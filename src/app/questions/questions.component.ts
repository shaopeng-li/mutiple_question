import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { questionsService } from '../service/questions.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
	q = '';
	id = '';
  answers = [];
	showResult: boolean = false;
	showNav: boolean = false;
	result: Number;

  constructor(private router: Router, private route: ActivatedRoute, private qs: questionsService, private _location: Location) { }

  ngOnInit() {
    //subscribe router params and get updated quesiton and answers list form service
  	this.route.params.subscribe( (params: Params) => {
  		this.id = params["id"];
  		this.q = this.qs.getQeustion(this.id);
      this.answers = this.qs.getAnswerList(this.id);
  	});
  }

  // fire when user select specific answer
  onClick(sel) {

    //call udpateAnswer udpate anwser list within service
  	this.qs.updateAnswer(this.id, sel);

    // judge if has more test, if has more test jump to next one, otherwise, show result
  	if(this.qs.haveMoreQuestion(this.id)) {
  		this.router.navigate(['questions', +this.id + 1]);
  		this.showResult = false;
  	} else {
  		this.showResult = true;
  		this.result = this.qs.getResult();
  	}
  	
  }

  // update condition to show back button
  showBackBtn(): boolean {
  	return +this.id > 1;
  }

  // fire when chlick back btn, nav back to prev page
  navBack() {
  	this.showResult = false;
  	this._location.back();
  }

}
