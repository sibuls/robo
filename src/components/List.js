import React from 'react';
import Item from './Item';
const List = ({robots, inputValue}) => {
// console.log(inputValue);
const filteredRobots = robots.filter(e  =>  e.name.toLowerCase().includes(inputValue.toLowerCase()))
const robotsMap = filteredRobots.map((el,i) => <Item key={el.id}  name={el.name} username={el.username} email={el.email}   /> ) 
    return ( 
<div className="robotsWrap">
{robotsMap}
</div>
     );
}
export default List;