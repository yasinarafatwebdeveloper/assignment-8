import React from 'react';

import Swal from "sweetalert2";

// import { Container } from "postcss";

const SingleDonation = ({singleDonation}) => {
    console.log(singleDonation)
    const {id,title,image,category,description,price,}=singleDonation||{}

const donateHandle=()=>{

//   Swal.fire({
//   title: "Donate Success",
//   text: "You clicked the button!",
//   icon: "success"
// });
  const setArrayy= [];
const local=JSON.parse(localStorage.getItem("name"))
if(!local){
setArrayy.push(singleDonation)
localStorage.setItem("name",JSON.stringify(setArrayy))


Swal.fire({
  title: "Donate Success",
  text: "You clicked the button!",
  icon: "success"
});
}


else{
  

 

  const isExist=local.find(output=>output.id==id)

  if(isExist){
Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: '<a href="#">Why do I have this issue?</a>'
});
  }

  else{
 setArrayy.push(...local,singleDonation)
  localStorage.setItem("name",JSON.stringify(setArrayy))

  Swal.fire({
  title: "Donate Success",
  text: "You clicked the button!",
  icon: "success"
});
  }
}
  

}


    return (
        <div>
           
             <div className="card mt-10  bg-base-100 shadow-xl ">
  <figure>

    
    <img   className="w-full h-screen top-0 left-0 bg-zinc-500"  src={image} alt="Shoes" />
   
    {/* <button className="btn btn-primary items-center">Buy Now</button> */}
    </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{category}</p>
    <p>{description}</p>
    <div className="card-actions ">
      <button onClick={donateHandle} className="btn btn-primary">Donate{price}</button>
    </div>
  </div>
</div>
          
        </div>
    );
};

export default SingleDonation;