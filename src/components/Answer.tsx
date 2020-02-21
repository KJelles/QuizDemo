import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import '../App.scss';
import 'typeface-roboto';

type MyProps = { correct: boolean, answer: string, handleClick: () => void, handleScore: (score: boolean) => void, style: object };
type MyState = { isCorrect: boolean };


class Answer extends React.Component<MyProps, MyState> {
	constructor(props: Readonly<MyProps>) {
		super(props);
		this.state = {
			isCorrect: false
		};
	}

	click = () => {
		this.props.handleClick();
		this.props.handleScore(this.props.correct); // Send the correct answer back to the parent for scoring
	}

	render() {
		return (
			<Grid container direction="row" justify="center" alignItems="center">
				<Grid item xs={5}>
					<Paper onClick={this.click} className='answer-container' variant='outlined' style={this.props.style}>
						<Typography variant="h6">
							{this.props.answer}
						</Typography>
					</Paper>
				</Grid>
			</Grid>
		);
	}
}

export default Answer;