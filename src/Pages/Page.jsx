// import React from 'react';

import { useLoaderData } from "react-router-dom";
import MultipleData from "../Components/MultipleData/MultipleData";
import { useEffect, useState } from "react";

const Page = () => {
    const datas=useLoaderData();
    console.log(datas)
    // const {category}=datas
const [inputValue,setInputValue]=useState()
const [buttonValue,setButtonValue]=useState()

const inputValueItem=(e)=>{
   
    // const local=JSON.parse(localStorage.getItem("name"))
    setInputValue(e.target.value)
    // console.log(e.target.value.local)
    // const itemAdd=local.find(match=>match.category==category)


}
// console.log(inputValue)

const buttonValueSet=()=>{

    // category()
    setButtonValue(inputValue)

}

useEffect(()=>{
   


},[])


// my another work is start
// const datas=useLoaderData()
// console.log(datas)
// const {id,title,image,category,description}=datas

// main
    return (
       <div className="container mx-auto">

       

         <div className="items-center text-center mt-20">
            <div className="text-2xl font-semibold">
                <h1>I Grow By Helping People In Need</h1>
            </div>
            <div className="mt-6">
            <input onChange={inputValueItem} type="text" placeholder="Type here" className="input input-bordered  w-full max-w-xs h-11  p-0 m-0 rounded-r-none focus:outline-none" />
          <button onClick={buttonValueSet} className=" h-11 w-24  text-white bg-red-600 rounded-md rounded-l-none">Search</button>
            {/* <button className="btn btn-active btn-secondary border-none">Secondary</button> */}
            </div>
            <p>{buttonValue}</p>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-10 pt-10 ">
            {
                datas?.map(data=><MultipleData data={data}></MultipleData>)
            }
            </div>

        </div>


{/* <p>{buttonValue}</p> */}
       </div>
    );
};

export default Page;