import React from "react";
import CloseButton from 'react-bootstrap/CloseButton';
import { useSelector, useDispatch } from "react-redux";
import { selectCategories, selectSelectedCategory, setSelectedCategory } from "../app/itemsSlice";



function FiltersMenu (props) {
    const dispatch = useDispatch();
    const categories = useSelector(selectCategories);
    const selectedCategory = useSelector(selectSelectedCategory);

    const getItemsByCategory = (cat_link, index) => {

        props.changeCategory(cat_link)
        props.toggleFilters();
        dispatch(setSelectedCategory({index: index}));
    }

    const getStyle = cname => {
        if(selectedCategory) {
            if(selectedCategory.cat_name === cname) {
                return {backgroundColor: 'hsl(132, 30%, 16%)'}
            }
        }
        return {backgroundColor: 'hsl(132, 83%, 16%)'};
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
                            style={getStyle(category.cat_name)}
                            onClick={()=>getItemsByCategory(category.cat_link, index)}
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