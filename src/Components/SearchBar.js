import React from "react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import  CloseButton  from "react-bootstrap/CloseButton";

function SearchBar (props) {
    const [searchTerm, setSearchTerm] = useState('');


    return (
        <>
        <div className="sb-container">
            <div className="sb-search-icon" onClick={()=>props.searchByTerm(searchTerm)}>
                <FaSearch />
            </div>
            <div className="sb-search-input">
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