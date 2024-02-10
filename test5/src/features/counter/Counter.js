import React from "react";
import { useSelector, useDispatch} from 'react-redux'
import { decriment, increment } from "./counterSlice";

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return(
        <div>
            <button 
                aria-label="Increment value" 
                onClick={() => dispatch(increment())}
            >
                increment
            </button>
            <span>{count}</span>
            <button 
                aria-label="Decrement value"
                onClick={() => dispatch(decriment())}
                >
                    Decriment
            </button>
        </div>
    )
}