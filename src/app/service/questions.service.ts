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
			"js lib": 3,
			"a programming language": 0
		},
		"What is react?": {
			"js lib": 1,
			"js framework": 2,
			"css framework": -1,
			"have no idea": 0
		}, 
		"Who is current prisident of United State": {
			"George Bush": 1,
			"Hillary Clinton": 2,
			"Barack Obama": 3,
			"Donald Trump": 4
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

	// receive selected page, return numeric value check if have more question
	public getNumberOfQuestions() {
		return Object.keys(this.questionSet).length;
	}

	// caculate final test score, return score
	public getResult() {
		return this.answer.reduce( (acc, cur) => {
			return acc + cur;
		} , 0);
	}

	// fallback function set eval answer to 0 if it is skipped
	public answeredQestion(page): void {
		if (this.answer.length != +page) {
			this.answer.push(0);
		}
	}
}