import { useState } from 'preact/hooks'

const Counter = () => {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <span>{counter}</span>
      <button class="rounded-sm px-2 py-4 hover:bg-green-600 border" onClick={(() => setCounter(counter => counter + 1))}>+</button>
      <button class="rounded-sm px-2 py-4 hover:bg-red-600 border" onClick={(() => setCounter(counter => counter - 1))}>-</button>
    </>
  )
}

export default Counter