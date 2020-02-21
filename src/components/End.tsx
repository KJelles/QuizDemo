import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import '../App.scss';
import 'typeface-roboto';

type MyProps = { handleReset: () => void, score: number };
type MyState = {};

const style = {
    color: 'white'
};

const btn = {
    marginTop: '20px'
}

class End extends React.Component<MyProps, MyState> {

    click = () => {
        this.props.handleReset();
    }

    render() {
        return (
            <Grid container justify="center" alignItems="center">
                <Grid item xs={3}>
                    <Typography variant="h3" style={style}>
                        <b>Quiz has been ended!</b>
                    </Typography>
                    <Typography variant="h5" style={style}>
                        Your final score was: <b>{this.props.score}</b>
                    </Typography>
                    <Button onClick={this.click} variant="contained" color="secondary" style={btn} fullWidth={true}>
                        Start over!
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

export default End;