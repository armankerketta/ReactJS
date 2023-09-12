import React, {useState,useEffect} from "react";
import StarRatings  from "react-star-ratings";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";

export function Products()
{
    const [data,setData]=useState([]);
    const [starRate,setStarRatings]=useState([""]);
    useEffect(()=>
                {
                   fetch("https://fakestoreapi.com/products/")
                   .then(get=>get.json())
                   .then(put=>setData(put))
                })
        
    return(
        <>
        <div className="container row d-flex">
            <h1 className="text-start">Product details</h1>
            <button className="justify-content-end">download</button>
        </div>

            <table className="table table-striped">
                <thead>
                <tr className="tablerowhead">
                    <th>Id</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th className="px-5">Add</th>
                    <th>View Product</th>
                </tr>
                </thead>
                {
                    data.map((value,index)=>(
                        <>
                        <tr className="tabledata ">
                        <td className="p-3" width="20px">{value.id}</td>
                        <td width="20px"><img src={value.image}height="100px"></img></td>
                        <td width="70px">{value.title}</td>
                        <td width="200px">{value.description}</td>
                        <td width="50px">{value.category}</td>
                        <td width="70px">{value.price}</td>
                        <td className="p-5">
                            <StarRatings
                            rating={value.rating.rate} 
                            starSpacing="2px"
                            starDimension="30px"
                            starRatedColor="gold"/>
                        </td>
                        <td width="10px">
                            <div>
                            <button className="bg-success rounded w-3" onClick={()=>{setStarRatings(starRate-1)}}> - </button>
                            <h3>{starRate}</h3>
                            <button className="bg-primary rounded w-3" onClick={()=>{setStarRatings(starRate+1)}}> + </button>
                            </div>
                        </td>
                        <td>
                            <Link to={`/Productsdisplay/${value.id}`}><button className="bg-primary rounded">View</button></Link>
                        </td>
                        </tr>
                        </>
                    ))
                }
            </table>
        </>
    );
}