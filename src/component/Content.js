import { useState } from "react"

const content = () => {
  let Names = ['Bob', 'Prince', 'Yaw']
  let arr
  for(let i=0; i<Names.length; i++){
    arr = Names[i]
  }

  const [name, setName] = useState('Brenda')
  setName(arr)
  const handleClick = () =>{
    console.log('Clicked')
  }
  const handleClick2 = (name) =>{
    console.log(`${name} was clicked`)
  }
  const handleClick3 = (e) =>{
    console.log(e)
  }
  return (
    <main>
      <p>
        Hello {arr}
      </p>
      <button onClick={handleClick()}>click</button>
      <button onClick={handleClick2(name)}>click</button>
      <button onClick={(e) =>handleClick3(e)}>click</button>
    </main>
  )
}

export default content