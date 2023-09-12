import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
// import { CSVLink } from "react-csv";

export function Productsdisplay()
{
    const [fetchvalue,setFetchvalue]=useState([]);
    var {id}=useParams()
    useEffect(()=>
                {
                   fetch("https://fakestoreapi.com/products/"+id)
                   .then(response=>response.json())
                   .then(data=>setFetchvalue(data))
                },[id]);
                
    return(
        <>
        <div className="row">
            <div className="col-lg-6">
                <img src={fetchvalue.image} />
            </div>
            <div className="col-lg-6">
                <h1 classNme="card-title">{fetchvalue.title}</h1>
                <p className="card-content text-danger">{fetchvalue.price}</p>
                <p className="card-content ">{fetchvalue.description}</p>
                
            </div>
        </div>
        </>
    );
}