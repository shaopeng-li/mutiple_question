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
  total = 0;
  answers = [];
	showResult: boolean = false;
	result: Number;

  constructor(private router: Router, private route: ActivatedRoute, private qs: questionsService, private _location: Location) { }

  ngOnInit() {
    // get total number of question set have
    this.total = this.qs.getNumberOfQuestions();

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
  	if(this.qs.getNumberOfQuestions() > +this.id) {
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

  // update condition to show forward button
  showForwardBtn(): boolean {
    return +this.id < this.qs.getNumberOfQuestions();
  }

  // fire when chlick back forward, nav to next page
  navForward() {
    this.qs.answeredQestion(this.id);
    this.router.navigate(['questions', +this.id + 1]);
  }

}
