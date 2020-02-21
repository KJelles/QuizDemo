import React from 'react';
import './App.scss';
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Data
import data from './data/questions.json';

// Components
import Start from './components/Start';
import Question from './components/Question';
import Answer from './components/Answer';
import End from './components/End';

type MyProps = {};
type MyState = { quizStarted: boolean, currentQuestion: number, questionAnswered: boolean, quizCompleted: boolean };

const stylesAnswer = { // All possible answer colors
	correct: {
		backgroundColor: '#57ff9a' // Green
	},
	incorrect: {
		backgroundColor: '#ff4f69' // Red
	},
	default: {
		backgroundColor: 'white'
	}
}

const stylesBtn = {
	marginTop: '20px'
}

class App extends React.Component<MyProps, MyState> {
	constructor(props: Readonly<MyProps>) {
		super(props);
		this.state = {
			quizStarted: false, // Has the quiz started?
			currentQuestion: 0, // What question is the user at?
			questionAnswered: false, // Has the current question been answered or not?
			quizCompleted: false // Has the quiz ended?
		};
	}

	scoreArray: boolean[] = [];

	setCorrectColor = (correct: boolean) => { // Find out wether the question has been answered AND if it's correct or not
		if (this.state.questionAnswered) {
			if (correct === true) {
				return stylesAnswer.correct;
			}
			if (correct === false) {
				return stylesAnswer.incorrect;
			}
		} else {
			return stylesAnswer.default;
		}
	}

	goNext = () => { // Go to the next question
		if (this.state.currentQuestion < data.items.length - 1) {
			this.setState({ currentQuestion: ++(this.state.currentQuestion as number) }) // Specify number because it won't accept the type 'any'
			this.setState({ questionAnswered: false }); // And reset the answered state
		} else {
			this.setState({ currentQuestion: 0 }) // Can't go further so the quiz is completed
			this.setState({ quizCompleted: true }) // Can't go further so the quiz is completed
		}
	}

	handleStart = () => {
		this.setState({ quizStarted: true }); // Quiz has been started
	}

	handleClick = () => {
		this.setState({ questionAnswered: true }); // Question has been answered
	}

	handleScore = (score: boolean) => {
		if (score === true && this.state.questionAnswered === false) { // prevent multiple clicks
			this.scoreArray.push(score); // Push all the correct answers to array to count them afterwards
		}
	}

	handleReset = () => { // Reset all states to it's original value
		this.setState({ currentQuestion: 0 })
		this.setState({ quizCompleted: false })
		this.setState({ quizStarted: false })
		this.setState({ questionAnswered: false })
		this.scoreArray = []; // Reset the user's score
	}

	render() {
		return (
			<div className="App">
				{(this.state.quizCompleted) ? <End handleReset={this.handleReset} score={this.scoreArray.length}></End> : <div>
					{(!this.state.quizStarted) ? (<Start handleStart={this.handleStart}></Start>) : (<div>
						<Typography variant="h2" className="score">
							<b>{this.scoreArray.length}</b>
						</Typography>
						<Grid container direction="row" justify="center" alignItems="center">
							<Grid container direction="row" justify="center" alignItems="center">
								<Question question={data.items[this.state.currentQuestion].question}></Question>
							</Grid>
							{data.items[this.state.currentQuestion].answers.map(key => <Answer handleClick={this.handleClick} handleScore={this.handleScore} correct={key.correct}
								style={this.setCorrectColor(key.correct)!} answer={key.answer}></Answer>)}
							<Button disabled={this.state.questionAnswered ? false : true} variant="contained" color="secondary" style={stylesBtn} onClick={() => this.goNext()}>
								Next
							</Button>
						</Grid>
					</div>)}
				</div>}

			</div>
		);
	}
}

export default App;
