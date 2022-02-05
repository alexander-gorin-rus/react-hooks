import React, {useState} from 'react';

const useStatePage = () => {
  const [count, setCount] = useState(0);
  const [state, setState] = useState({
    title: "The title",
    date: Date.now()
  })

  //change state based on previous state
  const doubleIncrement = () => {
    setCount((prevCond) => {
      return prevCond + 1
    });

    setCount(prev => prev + 1)
  }


  //This is the way to interact with JavaScript objects without rewriting 
  //the whole object
  const updateTitle = () => {
    setState(prev => {
      return {
        ...prev,
        title: 'Chaneg title'
      }
    })
  }
  
  

  return(
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={doubleIncrement} className='btn btn-success'>Add</button>
      <button onClick={() => setCount( count - 1)} className='btn btn-danger'>Subtract</button>
      <button onClick={updateTitle} className='btn btn-default'>Change title</button>
      <br />
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  )
};

export default useStatePage;
