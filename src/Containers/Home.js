import React from 'react';
import {Outlet} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { BiCategory } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { FaRedditSquare } from "react-icons/fa";

import { CSSTransition } from 'react-transition-group';

import SearchBar from '../Components/SearchBar';
import FiltersMenu from '../Components/FiltersMenu';
import { filters } from '../mocks/filters';
import { useState, useRef, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { fetchData, searchDataByTerm } from '../app/itemsSlice';
import redditAPI from '../Reddit';

const filtersArray = [];
filters.forEach((filter, i) => {
    filtersArray.push({filterName: filter, position: i, isChecked: false});
});

export default function Home () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showFilters, setShowFilters] = useState(false);
    const nodeRef = useRef(null);
    const [cat_url, setCat_url] = useState(null);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(()=>{
        dispatch(fetchData(cat_url));
    }, [cat_url])


    const toggleSearch = () => {
        setIsSearching(!isSearching);
    }

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const changeCategory = (cat) => {
        setCat_url(cat);
        navigate('/');
    }

    const searchByTerm = (term) => {
        dispatch(searchDataByTerm(term));
    }

    return (
        <>
        <CSSTransition
                    in={showFilters}
                    nodeRef={nodeRef}
                    timeout={300}
                    classNames='filters-appear'
                    unmountOnExit
                >
                    <div ref={nodeRef}>
                        <FiltersMenu toggleFilters={toggleFilters} cat_url={cat_url} changeCategory={changeCategory}/>
                    </div> 
                </CSSTransition>
        <div className='app-container'>
            
            <nav id='progress-bar'>
                <div className='filter-button' onClick={() => toggleFilters()}>
                    <BiCategory />
                </div>
                <h1 className='titulo-pagina' onClick={()=>scrollToTop()}><FaRedditSquare />  Reddit App</h1>
                {!isSearching?
                <div className='search-button' onClick={()=> setIsSearching(true)} >
                    <FaSearch/>
                </div> :
                <SearchBar toggleSearch={toggleSearch} searchByTerm={searchByTerm}/>} 
            </nav>
            <div className='content-container'>
                <div id='beginning'></div>
                

                <Outlet />
            </div>
        </div>
        </>
    );
}