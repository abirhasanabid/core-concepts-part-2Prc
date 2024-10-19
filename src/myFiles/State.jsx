import { useState } from 'react'

export default function State() {
    const [count, setCount] = useState(0)
    const handlerAdd = () => {
        setCount(count + 1);
    }
    const handlerRemove = () => {
        count >0 ? setCount(count -1): 0;
    }
    return (
        <div className='card'>
            <h2>Player: {count}</h2>
            <button onClick={handlerAdd}>Add</button>
            <button onClick={handlerRemove}>Remove</button>
        </div>
    )
}