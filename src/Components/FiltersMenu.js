import React from "react";
import CloseButton from 'react-bootstrap/CloseButton';
import { useSelector, useDispatch } from "react-redux";
import { selectCategories } from "../app/itemsSlice";



function FiltersMenu (props) {
    const categories = useSelector(selectCategories);

    const getItemsByCategory = (cat_link) => {

        props.changeCategory(cat_link)
        props.toggleFilters();
    }

    return (
        <div className="m-filters-container filters-container">
            <CloseButton id="close_button" variant="white" onClick={()=>props.toggleFilters()}/>
            <ul className="filters-list">
                    {categories.map((category, index)=>{
                        return (
                            <li 
                            key={`cat-${index}`} 
                            className="m-filter-item filter-item" 
                            onClick={()=>getItemsByCategory(category.cat_link)}
                            >
                                {category.cat_name}
                            </li>
                        )
                    })}
            </ul>
        </div>
    );
};

export default FiltersMenu;