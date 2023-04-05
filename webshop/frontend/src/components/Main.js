import React, {Component} from "react";
import Grid from '@mui/material/Grid';
import Carousel from "./carousel/Carousel";

class Main extends Component {
    constructor(){
        super();

    }

    render(){
        return (
            <div>       
                <Grid container  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={12}>
                        <Carousel />
                    </Grid>
                    <Grid item xs={6} md={4}>
                    </Grid>

                </Grid>
                
            </div>
        );
    }
}

export default Main