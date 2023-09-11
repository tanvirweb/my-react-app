import { useState } from "react";

function Counter() {
    const [count, countFunc] = useState(0);
    const addNum = () => {
        const newNum = count + 1;
        countFunc(newNum);
    }
    const removeNum = () => {
        const newNum = count - 1;
        countFunc(newNum);
    }
    return (
        <>
            <h2>Counter: {count}</h2>
            <button onClick={addNum}>Add Number</button>
            <button onClick={removeNum}>Remove Number</button>
        </>
    )
}

export default Counter;