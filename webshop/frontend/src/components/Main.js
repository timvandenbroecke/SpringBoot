import React, {Component} from "react";
import Grid from '@mui/material/Grid';

class Main extends Component {
    constructor(){
        super();

    }

    render(){
        return (
            <div>       
                <Grid container  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={12}>
                        <h1>Item1</h1>
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

export default Main