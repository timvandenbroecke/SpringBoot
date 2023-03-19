import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TablePagination from '@mui/material/TablePagination';
import { useDispatch, useSelector } from 'react-redux';
import {changePaginationParams, getItemsByPagination} from '../redux/actions';

import ShopCard from './cards/ShopCard';


export default function ShopView({store, total_items, type}) {

  const dispatch = useDispatch();
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [items, setItems] = useState(store);
  const [page, setPage] = useState(0);

  const pagination = useSelector(state => state.pagination);


  

  const handleChangePage = (event, newPage) => {

    setPage(newPage);
    dispatch(getItemsByPagination(newPage, rowsPerPage, "id", type));
  };

  const handleChangeRowsPerPage = (event) => {

    setRowsPerPage(parseInt(event.target.value, 10));
    dispatch(getItemsByPagination(page, parseInt(event.target.value, 10), "id", type));
  };

  useEffect(() => {



    if(store){
      setItems(store);
    }
  
  }, [store, rowsPerPage, page, type]);
 

  return (
    <Box className='shopview_container'>
      <Grid container 
            spacing={{ xs: 4, sm: 4, md: 4 }} 
            columns={{ xs: 4, sm: 4, md: 4 }}  
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
        {items.map((item) => (
            <Grid item key={item.id}>
                <ShopCard item={item}/>
            </Grid>
        ))}
      </Grid>

      <TablePagination className='pagination_shopview'
        component="div"
        count={total_items || 10}
        page={page || 0}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage || 10}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
}