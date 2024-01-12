import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { useSelector } from "react-redux";
import { selectIsLoading, selectItems, selectHasError } from "../app/itemsSlice";
import ItemCard from "./ItemCard";
import { useState, useEffect } from "react";

function Items (props) {
    const isLoading = useSelector(selectIsLoading);
    const items = useSelector(selectItems);
    const hasError = useSelector(selectHasError);
    const [show, setShow] = useState(false);

    useEffect(()=> {
        isLoading? setShow(false) : setShow(true);
    }, [isLoading])

    return (
        <>
        {hasError && <p>Error al obtener los datos. Error: {hasError}</p>}
        {items?
         <div className="m-items-container items-container">
            {items.map((item, index)=> {
                return (
                    <ItemCard item={item} show={show} key={`item-${index}`} />
                )
            })}
        </div> : 
        <div className="cargando-container">
           <Spinner variant="success" id="cargando"/>
        </div>
        }
        </>
    )
}

export default Items;
