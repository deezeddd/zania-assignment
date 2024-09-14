import React, { useState } from "react";
import Card from "./Card";

const List = (props) => {

const [data, setData] = useState(props.data);

  return (
    <div className="h-24">   
    {data.map((d) =>(
        <h1>
            <Card val = {d} />
        </h1>
    ))}
        
    </div>
  )
};
export default List;
