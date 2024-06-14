import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/counterSlice'
import { decrementfive, incrementfive } from './redux/counterSlice2'

function Counter() {

    const dispatch = useDispatch()
    const count = useSelector(state => state.counter.count)
    const counter = useSelector(state => state.count2.count)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>Increament</button>
            <button onClick={() => dispatch(decrement())}>Decreament</button>


            <h1> 5 X {counter}</h1>
            <button onClick={() => dispatch(incrementfive())}>Increament</button>
            <button onClick={() => dispatch(decrementfive())}>Decreament</button>


        </div>
    )
}

export default Counter
