import React from 'react';
import {Outlet} from 'react-router-dom';

import { BiCategory } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { FaRedditSquare } from "react-icons/fa";

import { CSSTransition } from 'react-transition-group';

import FiltersMenu from '../Components/FiltersMenu';
import { filters } from '../mocks/filters';
import { useState, useRef, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoading,selectItems } from '../app/itemsSlice';
import { fetchData } from '../app/itemsSlice';

const filtersArray = [];
filters.forEach((filter, i) => {
    filtersArray.push({filterName: filter, position: i, isChecked: false});
});

export default function Home () {
    const dispatch = useDispatch();
    const [showFilters, setShowFilters] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState(filtersArray);
    const nodeRef = useRef(null);

    useEffect(()=>{
        dispatch(fetchData());
    }, [])

    const changeFilters = position => {
        setSelectedFilters(prev => {
            return prev.map((filter, index)=> index===position? {...filter, isChecked: !filter.isChecked} : filter)
       })
       }

    return (
        <div className='app-container'>
            
            <nav>
                <div className='filter-button' onClick={() => setShowFilters(!showFilters)}>
                    <BiCategory />
                </div>
                <h1 className='titulo-pagina'><FaRedditSquare />  Reddit App</h1>
                <div className='search-button'>
                    <FaSearch/>
                </div>
            </nav>
            <div className='content-container'>
                <CSSTransition
                    in={showFilters}
                    nodeRef={nodeRef}
                    timeout={300}
                    classNames='filters-appear'
                    unmountOnExit
                >
                    <div ref={nodeRef}>
                        <FiltersMenu filters={selectedFilters} changeFilters={changeFilters}/>
                    </div> 
                </CSSTransition>

                <Outlet />
            </div>
        </div>
    );
}