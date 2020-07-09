import React from 'react';
import "../styles/Item.css"


const Item = ({ name, username, email,link}) => {

  





    return (  


<div className="robotsFrame"> 


<div  className="robotsCard"> 
<img src={`https://robohash.org/${name}`} alt={name}/>
</div>
{name}
</div>





    )
}
 
export default Item




