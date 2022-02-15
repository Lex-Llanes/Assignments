import {useState} from "react";



export default function Counter() {

const [count, setCount] = useState(0);

function incrementCount() {
    setCount(prevCount => prevCount + 1);
}

function decreaseCount() {
    setCount(prevCount => prevCount - 1);
}
function resetCount() {
    setCount(0);
}

    return(
        <div>
        <button onClick={decreaseCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
        <button onClick={resetCount}>Reset</button>
        </div>

    )
}
