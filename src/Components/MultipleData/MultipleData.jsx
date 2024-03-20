// import React from 'react';

// import { Container } from "postcss";
import { Link, useLoaderData, useParams } from "react-router-dom";

const MultipleData = ({data}) => {
    // console.log(data)
    const {id,title,image,category,description,color,price}=data
  // const {id}=useParams()
  // console.log(id)
  // const datas=useLoaderData()
  // console.log(datas)
    return (
        <div>
   
      <Link to={`/DonationPage/${id}`}>
       <div className="card h-96 bg-base-100 shadow-xl">
  <figure><img className="" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{category}</p>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>
       
       </Link>
   
        </div>
    );
};

export default MultipleData;