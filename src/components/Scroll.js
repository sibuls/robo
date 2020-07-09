import React from 'react';


const Scroll = (props) => {


    return (

<div className="wrap"  style={{ marginTop:20, overflowY:"scroll", height:"80vh"}}>


{props.children}

</div>


      )
}
 
export default Scroll;