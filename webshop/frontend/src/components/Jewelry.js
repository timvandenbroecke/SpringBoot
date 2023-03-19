import React, {Component} from "react";
import Grid from '@mui/material/Grid';


class Jewelry extends Component {


    render(){

        return (
            <div>
                <h1>Jewelry</h1>
                <Grid container >
                    <Grid item xs={6} md={8}>
                        <h1>Item</h1>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <h1>Item</h1>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <h1>Item</h1>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <h1>Item</h1>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Jewelry