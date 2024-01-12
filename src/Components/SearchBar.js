import React from "react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import  CloseButton  from "react-bootstrap/CloseButton";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../app/itemsSlice";

function SearchBar (props) {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const handleClick = (searchTerm) => {
        props.searchByTerm(searchTerm);
        props.toggleSearch();
        dispatch(setSelectedCategory(34));
    }

    return (
        <>
        <div className="m-sb-container sb-container">
            <div className="sb-search-icon" onClick={()=>handleClick(searchTerm)}>
                <FaSearch />
            </div>
            <div className="m-sb-search-input sb-search-input">
            <input type="text"
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                placeholder="Search by term"
            />
            </div>
            <div className="sb-search-close">
                <CloseButton onClick={()=> props.toggleSearch()}/>
            </div>
        </div>
        </>
    )
}

export default SearchBar;