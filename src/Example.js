import React, {useState, useEffect} from "react";
import Stepper from "react-stepper-horizontal";

const Example = () => {
    const [count,setCount] = useState(0);

    useEffect(() =>{
        document.title = "You clicked ${count} times";
    })
    const handleClick = () =>{
       alert("You Clicked ME")
     };
    return(
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={() =>setCount(count+1)}>
                Click Me
            </button>
            <Stepper steps={ [{title: "Step one"}, {title: "Step Two"} ,{title: "Step Three"} ]} activeStep={ 0 } onClick={ () => setCount(count +1)} />
        </div>
    )

}

export default Example;
