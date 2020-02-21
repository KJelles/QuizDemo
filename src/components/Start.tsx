import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import '../App.scss';
import 'typeface-roboto';

type MyProps = { handleStart: () => void };
type MyState = {};

const style = {
    color: 'white'
};

const btn = {
    marginTop: '20px'
}

class Start extends React.Component<MyProps, MyState> {

    click = () => {
        this.props.handleStart();
    }

    render() {
        return (
            <Grid container justify="center" alignItems="center">
                <Grid item xs={3}>
                    <Typography variant="h3" style={style}>
                        <b>Welcome to the quiz!</b>
                    </Typography>
                    <Typography variant="h6" style={style}>
                        <b>By: Kevin Jelles</b>
                    </Typography>
                    <Button onClick={this.click} variant="contained" color="secondary" style={btn} fullWidth={true}>
                        Start now!
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

export default Start;