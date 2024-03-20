import React from 'react';

const SingleDonate = ({donateItem}) => {

    const {title,image,category,price,}=donateItem||{}
    // console.log(donateItem)
    return (
        <div>
      <div className="card card-side bg-base-100 shadow-xl ">
  <figure><img src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{category}</h2>
    <h2 className="card-title">{title}</h2>
    <p>{price}</p>
    <div className="card-actions ">
      <button className="btn btn-primary">Views Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleDonate;