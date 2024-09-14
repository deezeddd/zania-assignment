import React, { useState } from "react";

const Card = (props) => {

    const [task, setTask] = useState(props?.data);

    function statusDone(){
        // const status = task;
        console.log(props.data);
    }
    return (
        <>
        <div className="border-2  flex justify-center items-center">
            <div>
            <h1>{props.val.category}</h1>
            <h2>{props.val.description}</h2>
            <button className="m-2 p-2 bg-green-200" onClick={() => statusDone()}>Done</button>
            <button className="m-2 p-2 bg-red-200">Delete</button>
            </div>
        </div>
        </>
    );
};
export default Card;
