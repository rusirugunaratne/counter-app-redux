import "./Counter.css"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "./state/store"
import { decrement, incrementByAmount, reset } from "./state/counter/counterSlice"

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  const getCountColor = (): string => {
    if (count > 0) return "positive"
    if (count < 0) return "negative"
    return "zero"
  }

  return (
    <div className='counter-container'>
      <div className='counter-card'>
        <h2 className='counter-title'>Counter App</h2>
        <div className='counter-display'>
          <span className={`counter-value ${getCountColor()}`}>{count}</span>
        </div>
        <div className='counter-buttons'>
          <button className='counter-btn decrement-btn' onClick={() => dispatch(decrement())} type='button'>
            -
          </button>
          <button className='counter-btn reset-btn' onClick={() => dispatch(reset())} type='button'>
            Reset
          </button>
          <button className='counter-btn increment-btn' onClick={() => dispatch(incrementByAmount(10))} type='button'>
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter
