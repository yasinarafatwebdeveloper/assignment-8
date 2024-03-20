// import React from 'react';

import { PieChart } from "react-minimal-pie-chart";

const Staticis = () => {
    return (
        <div >
          {/* import { PieChart } from 'react-minimal-pie-chart'; */}
<div className="flex justify-center mt-10">
<PieChart className="w-96"
  data={[
    { title: 'One', value: 60, color: '#E38627' },
    { title: 'Two', value: 40, color: '#C13C37' },
    // { title: 'Three', value: 20, color: '#6A2135' },
  ]}
  
/>;
</div>

  <div className="flex justify-center mt-10">
    <p>Donation 60%</p>
    <p>Total Donation 40%</p>
  </div>

        </div>
        
    );
};

export default Staticis;








//   {/* <div className=" flex justify-center mt-10">
// <PieChart className=" w-96"
//   data={[
//     { title: 'One', value: 10, color: '#E38627' },
//     { title: 'Two', value: 15%, color: '#C13C37' },
//     // { title: 'Three', value: 5, color: '#6A2135' },
//   ]}
// />;
// </div> */}




// <div className=" flex justify-center mt-10">
// <PieChart className=" w-96"
//   data={[
//     { title: 'One', value: 10, color: '#E38627' },
//     { title: 'Two', value: 15%, color: '#C13C37' },
//     // { title: 'Three', value: 5, color: '#6A2135' },
//   ]}
// />;
// </div>