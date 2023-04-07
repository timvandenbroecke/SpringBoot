import React, {Component} from "react";
import Grid from '@mui/material/Grid';
import Carousel from "./carousel/Carousel";
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

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
                    <Grid item xs={12} md={12}>
                        <div className="paper-watches">
                            <Paper elevation={3}>
                                <div>
                                    <h3>Lorem Ipsum</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                                    <br/>
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                                </div>           
                                <div className="image">
                                    <img  src="https://images.unsplash.com/photo-1569397288884-4d43d6738fbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" />
                                </div>               
                            <Divider />

                            </Paper>
                        </div>
                    </Grid>

                </Grid>
                
            </div>
        );
    }
}

export default Main