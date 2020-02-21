import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import '../App.scss';
import 'typeface-roboto';

const style = {
	color: 'white'
};

const Question = (props: { question: React.ReactNode; }) => {
	return (
		<Grid item xs={5}>
			<Container>
				<Typography variant="h3" style={style}>
					<b>{props.question}</b>
				</Typography>
			</Container>
		</Grid>
	);
};

export default Question;