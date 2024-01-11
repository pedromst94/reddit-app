import React from "react";
import { filters } from "../mocks/filters";
import { useState, useEffect } from "react";

const filtersArray = [];
filters.forEach((filter, i) => {
    filtersArray.push({filterName: filter, position: i, isChecked: false});
});


function FiltersMenu (props) {
    const {filters} = props;
   /* const [selectedFilters, setSelectedFilters] = useState(filtersArray);

   const handleChange = position => {
    setSelectedFilters(prev => {
        return prev.map((filter, index)=> index===position? {...filter, isChecked: !filter.isChecked} : filter)
   })
   }*/

    return (
        <div className="filters-container">
            <ul className="filters-list">
                    {filters.map(({filterName, position, isChecked}) => {
                        return (
                            <li key={position} className="filter-item">
                                <label htmlFor={`${filterName}-checkbox`}>{filterName}</label>
                                <input 
                                type="checkbox"
                                name={filterName}
                                value={filterName}
                                id={`${filterName}-checkbox`}
                                checked={isChecked}
                                onChange={()=>props.changeFilters(position)}
                                />
                            </li>
                        )
                    })}
            </ul>
        </div>
    );
};

export default FiltersMenu;