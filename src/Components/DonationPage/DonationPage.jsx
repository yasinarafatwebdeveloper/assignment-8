import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleDonation from "../../Pages/SingleDonation";


const DonationPage = () => {
    // const {id,name,image,category,description,color,price}=data
    const [singleDonation,setSingleDonation]=useState({})

    const {id}=useParams()
    console.log(id)
    const data=useLoaderData()
    // console.log(data)

useEffect(()=>{
const donationitems=data.find(item=>item.id==id)
console.log(donationitems)
// donationitems(setSingleDonation)
setSingleDonation(donationitems)

},[data,id])
    // console.log(singleDonation)
    return (
        <div>
            {/* hello */}
            <SingleDonation singleDonation={singleDonation}></SingleDonation>
        </div>
    );
};

export default DonationPage;