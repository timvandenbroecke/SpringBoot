import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'



export default function SearchView(){

    const dispatch = useDispatch()
    const search = useSelector((state) => state.search);

    

    return (
        <div>
            <h1>{search}</h1>
        </div>
    );

}