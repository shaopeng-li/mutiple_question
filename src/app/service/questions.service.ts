export class questionsService{
	private questionSet = {
		"What is angular js?": {
			"a language": 1,
			"a css framwork": 2,
			"a lib": 3,
			"a js framwork": 4
		},
		"What is typescript?": {
			"javascript": 1,
			"css": 2,
			"js lib": 3
		},
		"What is react?": {
			"js lib": 1,
			"js framework": 2
		}
	};

	private answer = [];

	// update answer arr
	public updateAnswer(page, sel): void {
		var point = this.getPoint(+page, sel);
		this.answer.splice(page-1, 1, point);
	}

	// get question with selected page
	public getQeustion(id) {
		var arr = Object.keys(this.questionSet);
		return arr[+id-1];
	}

	// get answer list with selected page
	public getAnswerList(id) {
		var question = this.getQeustion(id);
		return Object.keys(this.questionSet[question]);
	}

	// get point with selected anwser
	private getPoint(page, sel) {
		var q = this.getQeustion(page);
		var as = this.questionSet[q];
		return as[sel];
	}

	// receive selected page, return boolean value check if have more question
	public haveMoreQuestion(id): boolean {
		return Object.keys(this.questionSet).length > id;
	}

	// caculate final test score, return score
	public getResult() {
		return this.answer.reduce( (acc, cur) => {
			return acc + cur;
		} , 0);
	}
}