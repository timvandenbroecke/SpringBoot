import React, {Component} from "react";
import Grid from '@mui/material/Grid';
import ShopView from "./ShopView";
import {getItemsByPagination, changePaginationParams, getTotalItems} from '../redux/actions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {WATCH} from '../constants/ItemConstants';

class Watches extends Component {
    constructor(){
        super();


    }

    componentDidMount(){

        this.props.getItemsByPagination(0, this.props.pagination.total || 10, "id", WATCH);
       // this.props.changePaginationParams(0, 10, 10, WATCH);
    }

    Prev = () => {

    }

    Next = () => {

    }

    render(){

       const {store, total_items} = this.props; 
  
        return(
            <div className="shop-view">                
             <ShopView store={store || []} total_items={total_items} type={WATCH}/>
            </div>
        );
    }

}


function mapStateToProps(state){
    console.log(state);

    const store = state.store.items;
    const total_items = state.store.total_items;

    return {
    
    store: store,
    total_items: total_items,
    pagination: state.pagination,
    totalitems: state.totalitems || 0
    
   }}
   
function mapDispatchToProps(dispatch) {
return { 
    dispatch,
    ...bindActionCreators({ getItemsByPagination, 
                            changePaginationParams,
                            getTotalItems},
                            dispatch
                        ),

}}

export default connect(mapStateToProps, mapDispatchToProps)(Watches)
