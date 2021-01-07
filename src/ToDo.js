import React from "react";

//This is a child element of App.js//
// for (let x =0; x < props.length; x++){console.log(x, "inside for loop")};


function ToDo(props){
    let thingList = props.children.map(item => ("Do this: ") + item.thing + 
    ". When do you want to do it :" + item.time);
    return(
    <div>
        {thingList}
    </div>
    )
};

export default ToDo;