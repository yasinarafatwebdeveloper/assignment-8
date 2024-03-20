// import React from 'react';

import { useEffect, useState } from "react";
import SingleDonate from "./SingleDonate";

const Donation = () => {

const [donate,setDonate]=useState([])
const [showData,setShowData]=useState()
const [showButton,setShowButton]=useState(false)
// const {id,title,image,category,description,price,}=singleDonation||{}
const local=JSON.parse(localStorage.getItem("name"))
// console.log(local)

useEffect(()=>{

if(!local){
    setShowData("No Data Here")
}


else{
  

// if(donate.length>4){
// setShowButton(<button>Showmore</button>)
// }
// else{
    setDonate(local)
// }

// if(){


// }



}


},[])
// console.log(donate)

const showMoreButton=()=>{

    setShowButton(!showButton)
    // console.log("hello")
// setShowButton("remove")
    console.log(showButton)
}


    return (
        <div>

{
showData?<h1>{showData}</h1>:

// donate.length>1&& <button>Show button</button>



<div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
    
{
  showButton?    donate?.map(donateItem=> <SingleDonate donateItem={donateItem}></SingleDonate>):

  donate?.slice(0,4).map(donateItem=> <SingleDonate donateItem={donateItem}></SingleDonate>)
 }


</div>

}

<div className="text-center items-center mt-5">
{
  donate.length>4 && <button onClick={showMoreButton} className="btn btn-neutral ">{showButton?"show less":"show more"}</button>


//    <button onClick={onDelete}>button</button>

} 
</div>

{/* {
    donate.length>4 && <button onClick={showMoreButton} className="btn btn-neutral text-center items-center">see More</button>
}   */}
        </div>
    );
};

export default Donation;










