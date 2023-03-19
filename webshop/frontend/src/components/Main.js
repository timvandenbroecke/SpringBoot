import React, {Component} from "react";
import Grid from '@mui/material/Grid';

class Main extends Component {
    constructor(){
        super();

    }

    render(){
        return (
            <div>
                <h1>Main</h1>
       
                <Grid container  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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

export default Main